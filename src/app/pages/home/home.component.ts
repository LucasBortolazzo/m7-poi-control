import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    delay,
    finalize,
    forkJoin,
    retry,
    Subscription,
    tap,
} from 'rxjs';

import { NgxSpinnerService } from 'ngx-spinner';

import TemplateUtils from 'src/app/shared/template-utils';

import { FilterForm } from './model/filtro-form';
import { LeituraPosicao } from './model/leitura-posicao';
import { Poi } from './model/poi';
import { PoisVeiculosTotalizador } from './model/pois-veiculos-totalizador';
import { VeiculoLeitura } from './model/veiculo-leitura';


import { GMapService } from './services/gmap.service';
import { PoiService } from './services/poi.service';
import calculoPoiUtils from './calculo-poi-utils';
import { DialogMemoriaCalculoComponent } from '../dialog-memoria-calculo/dialog-memoria-calculo.component';
import { ConfirmDialogModel, DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('MatExpansionPanelFiltro') private _matExpansionPanelFiltros: MatExpansionPanel;

    private _subscription: Subscription = new Subscription();
    private _poisVeiculosTotalizadoresOriginal: PoisVeiculosTotalizador[] = [];
    private _leiturasPosicaoveiculosOutPoi: VeiculoLeitura[] = [];

    public dataPoiTable: Poi[] = [];
    public formFiltro: FormGroup;
    public loading = false;
    public pois: Poi[] = [];
    public placas: string[] = [];
    public leituraPosicao: LeituraPosicao[] = [];

    public mapStyles: string[] = ['Padrão', 'Blue', 'Uber', 'Multi Brand Network', 'Cobalt', 'Midnight', 'Simple night'];
    public displayedColumns: string[] = ['id', 'nome', 'latitude', 'longitude', 'raio', 'veiculos', 'totalizadorPoi', 'verNoMapa', 'verDadosMemoriaCalculo'];

    constructor(
        private _fb: FormBuilder,
        private _snackBar: MatSnackBar,
        private _gMapService: GMapService,
        private _poiService: PoiService,
        private _dialog: MatDialog,
        private _spinner: NgxSpinnerService
    ) { }

    ngOnInit(): void {
        this._initializeMap();
        this._criarFormFiltro();
        this._implementEvents();
        this._carregarDados();
        this._configurarTemplate();
    }

    ngAfterViewInit(): void {
        if (this._matExpansionPanelFiltros) {
            this._subscription.add(
                this._matExpansionPanelFiltros.opened.subscribe(() => this._gMapService.closeAllInfoWindow())
            );
        }
    }

    private _implementEvents() {
        this._subscription.add(
            this._gMapService.$processarCalcularPoisEvent.
                pipe(
                    tap(() => this._exibirAguarde()),
                    (delay(500)))
                .subscribe({
                    next: (newPoi: Poi | void) => {
                        if (newPoi && !this.pois.find((poi) => poi.id === newPoi.id)) {
                            this.pois.push(newPoi);
                            this.formFiltro.get('poiId').setValue(newPoi.id);
                            this._esconderFiltros();

                            this._exibirMensagemInformacao('O POI selecionado não foi encontrado na lista de POIs pré-cadastrados, portanto ele '
                                .concat('será calculado temporariamente, considerando o novo raio, e ficara disponivel somente até a página ser recarregada.'), 7000);
                        };

                        this._gMapService.resetMap();
                        this._processarPoisLeiturasVeiculos();
                        this._calcularPois();
                    },
                    error: (e: any) => {
                        this._esconderAguarde();
                        console.error('Ocorreu um erro inesperado. ' + e);
                    },
                })
        );

        this._subscription.add(
            this.formFiltro.get('mapStyle').valueChanges.subscribe((mapStyleName) => {
                this._gMapService.setMapStyle(mapStyleName);
            })
        );
    }

    private _configurarTemplate() {
        this._exibirFiltros();
    }

    private _exibirAguarde() {
        this._spinner.show();
        this.loading = true;
    }

    private _esconderAguarde() {
        this._spinner.hide();
        this.loading = false;
    }

    private _initializeMap() {
        this._gMapService.initializeMap(
            document.querySelector('#map') as HTMLElement
        );
    }

    private _criarFormFiltro() {
        this.formFiltro = this._fb.group({
            poiId: [1],
            placa: [null],
            dataLeitura: [null],
            mapStyle: ['Cobalt']
        });
    }

    private get _filtroForm(): FilterForm {
        const poiId = this.formFiltro.get('poiId').value || null;
        const poi: Poi = poiId ? this.pois.find((poi) => poi.id === poiId) : null;
        const placa = this.formFiltro.get('placa').value || null;
        let dataLeitura = this.formFiltro.get('dataLeitura').value || null;

        dataLeitura = dataLeitura
            ? formatDate(dataLeitura, 'MM/dd/yyyy', 'en')
            : dataLeitura;

        const objFiltro: FilterForm = {
            poi: poi,
            placa: placa,
            dataLeitura: dataLeitura,
        };

        return objFiltro;
    }

    private _carregarDados() {
        this.loading = true;
        this._spinner.show();

        const dadosSource$ = forkJoin({
            pois: this._poiService.getPois(),
            placas: this._poiService.getPlacas(),
            leituraPosicao: this._poiService.getLeituraPosicao(),
        });

        this._subscription.add(
            dadosSource$
                .pipe(
                    retry(3),
                    finalize(() => {
                        this.loading = false;
                        this._spinner.hide();
                        this._gMapService.$processarCalcularPoisEvent.next();
                    })
                )
                .subscribe({
                    next: (dados: any) => {
                        this.pois = dados?.pois || [];
                        this.placas = dados?.placas || [];
                        this.leituraPosicao = dados?.leituraPosicao || [];
                    },
                    error: (e: HttpErrorResponse) => {
                        this._exibirMensagemErro(e);
                    },
                })
        );
    }

    private _processarPoisLeiturasVeiculos() {
        const poisVeiculosTotalizadores: PoisVeiculosTotalizador[] = calculoPoiUtils
            .processarPoisLeiturasVeiculos(this.leituraPosicao, this.pois, this._poisVeiculosTotalizadoresOriginal, this._filtroForm.poi);

        this._poisVeiculosTotalizadoresOriginal = [...this._poisVeiculosTotalizadoresOriginal, ...poisVeiculosTotalizadores];
    }

    private _calcularPois() {
        let poisVeiculosTotalizadorFilterData: PoisVeiculosTotalizador[] =
            this._poisVeiculosTotalizadorFilterData;

        this._ordenarPosicaoLeituraVeiculosPorDataLeitura(
            poisVeiculosTotalizadorFilterData
        );

        this._calcularTempoVeiculosInPoi(
            poisVeiculosTotalizadorFilterData
        );

        this._calcularTempoTotalVeiculosInPoi(
            poisVeiculosTotalizadorFilterData
        );

        this._gerarLeiturasPosicaoVeiculosOutPoi(poisVeiculosTotalizadorFilterData);

        this._gerarGerarOvelays(poisVeiculosTotalizadorFilterData);
    }

    private _ordenarPosicaoLeituraVeiculosPorDataLeitura(
        poisVeiculosTotalizadorFilterData: PoisVeiculosTotalizador[]
    ) {
        poisVeiculosTotalizadorFilterData.map(poiVeiculoTotalizador => {
            poiVeiculoTotalizador.poi.veiculos.map(veiculosPoi => {
                veiculosPoi.leiturasVeiculo.sort((a, b) => {
                    if (a.data < b.data) return -1;
                    if (a.data > b.data) return 1;
                    return 0;
                });
            });
        });
    }

    private _calcularTempoVeiculosInPoi(
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[]
    ) {
        calculoPoiUtils.calcularTempoVeiculosInPoi(poisVeiculosTotalizadores);
    }

    private _calcularTempoTotalVeiculosInPoi(
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[]
    ) {
        calculoPoiUtils.calcularTempoTotalVeiculosInPoi(poisVeiculosTotalizadores);

        this.dataPoiTable = calculoPoiUtils.gerarDadosTotalizadoresTabela(poisVeiculosTotalizadores, this.dataPoiTable);
    }

    private get _poisVeiculosTotalizadorFilterData(): PoisVeiculosTotalizador[] {
        let poisVeiculosTotalizadorFilterData: PoisVeiculosTotalizador[] = JSON.parse(JSON.stringify(this._poisVeiculosTotalizadoresOriginal));

        if (this._filtroForm) {
            if (this._filtroForm.poi) {
                poisVeiculosTotalizadorFilterData =
                    poisVeiculosTotalizadorFilterData.filter(
                        poiVeiculoTotalizador =>
                            poiVeiculoTotalizador.poi.id ===
                            this._filtroForm.poi.id
                    );
            }

            if (this._filtroForm.placa || this._filtroForm.dataLeitura) {
                poisVeiculosTotalizadorFilterData.map((poiVeiculoTotalizador) => {

                    for (let i = poiVeiculoTotalizador.poi.veiculos.length - 1; i >= 0; i--) {
                        if (this._filtroForm.placa) {
                            if (poiVeiculoTotalizador.poi.veiculos[i].placa.toUpperCase() !== this._filtroForm.placa.toUpperCase()) {
                                poiVeiculoTotalizador.poi.veiculos.splice(i, 1);
                                return;
                            }
                        }

                        if (this._filtroForm.dataLeitura) {
                            for (let j = poiVeiculoTotalizador.poi.veiculos[i].leiturasVeiculo.length - 1; j >= 0; j--) {
                                const dataLeitura = formatDate(
                                    poiVeiculoTotalizador.poi.veiculos[i].leiturasVeiculo[j].data, 'dd/MM/yyyy', 'pt-BR', '+00:00'
                                );
                                const dataFiltro = formatDate(
                                    this._filtroForm.dataLeitura, 'dd/MM/yyyy', 'pt-BR', '+00:00'
                                );

                                if (dataLeitura !== dataFiltro) {
                                    poiVeiculoTotalizador.poi.veiculos[i].leiturasVeiculo.splice(j, 1);
                                }
                            }
                        }

                        if (!poiVeiculoTotalizador.poi.veiculos[i].leiturasVeiculo?.length) {
                            poiVeiculoTotalizador.poi.veiculos.splice(i, 1);
                        }
                    }
                }
                );
            }
        }

        return poisVeiculosTotalizadorFilterData;
    }

    private _gerarLeiturasPosicaoVeiculosOutPoi(poisVeiculosTotalizador: PoisVeiculosTotalizador[]) {
        this._leiturasPosicaoveiculosOutPoi = calculoPoiUtils.gerarLeiturasPosicaoVeiculosOutPoi(poisVeiculosTotalizador, this.leituraPosicao);
    }

    private _gerarGerarOvelays(poisVeiculosTotalizador: PoisVeiculosTotalizador[]) {

        try {
            poisVeiculosTotalizador.forEach((poiVeiculoTotalizador, index) => {
                this._gerarOvelayPoi(poiVeiculoTotalizador.poi);

                if (index === poisVeiculosTotalizador.length - 1) {
                    this._gMapService.setMapcenter(poiVeiculoTotalizador.poi.center);
                }

                poiVeiculoTotalizador.poi.veiculos.forEach((veiculoInPoi) => {
                    this._gerarOverlayLeituraVeiculo(veiculoInPoi);
                });
            });

            this._leiturasPosicaoveiculosOutPoi.forEach((veiculoOutPoi) => {
                if (veiculoOutPoi.overlay) {
                    this._gerarOverlayLeituraVeiculo(veiculoOutPoi);
                }
            });

        } finally {
            setTimeout(() => {
                this._esconderAguarde();
            }, 500);
        }
    }

    private _gerarOvelayPoi(poi: Poi) {
        this._gMapService.createCircle(poi.raio, poi.center);
        this._gMapService.createMarkerInfoWindow(poi.center, TemplateUtils.getPoiInfoWindowTemplate(poi), 'opened');
    }

    private _gerarOverlayLeituraVeiculo(leituraVeiculo: VeiculoLeitura) {
        leituraVeiculo.leiturasVeiculo.forEach((leitura) => {
            switch (leituraVeiculo.overlay) {
                case 'infoWindow': {
                    this._gMapService.createMarkerInfoWindow(leitura.center, TemplateUtils.getVeiculoLeituraWindowTemplate(leitura,
                        leituraVeiculo.dadosFicticiosVeiculo, leituraVeiculo), 'closed', leituraVeiculo.dadosFicticiosVeiculo.iconName);
                    return;
                }
            }
        });
    }

    private _exibirMensagemInformacao(mensagem: string, duracao?: number,) {
        this._snackBar.open(mensagem, 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: duracao ? duracao : 5000,
        });
    }

    private _exibirMensagemErro(error: HttpErrorResponse) {
        const detalhesError = `(Status: ${error.status}. ${error.message ? ` Detalhes: ${error.message}` : ''
            })`;
        const message = `🌧 Ops! Algo deu errado. Por favor, tente novamente mais tarde. ${detalhesError}`;

        this._snackBar.open(message, 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 10000,
        });
    }

    private _esconderFiltros() {
        if (!this._matExpansionPanelFiltros) {
            return;
        }

        this._matExpansionPanelFiltros.close();
    }

    private _exibirFiltros() {
        if (!this._matExpansionPanelFiltros) {
            return;
        }

        this._matExpansionPanelFiltros.open();
    }

    public visualizarPois() {
        if (!this._filtroForm.poi) {
            this._exibirConfirmacaoParaProcessarTodosPois();
            return;
        }

        this._gMapService.$processarCalcularPoisEvent.next();
        this._esconderFiltros();
    }

    public _exibirConfirmacaoParaProcessarTodosPois(): void {
        const dialogData: ConfirmDialogModel = {
            title: 'Confirmação de ação',
            message: `Nenhum filtro de ponto de interesse foi informado, `
                .concat(`sendo assim, serão calculados TODOS os POIs para TODAS as leituras de posições obtidas. <br>`)
                .concat(`isso pode demorar um pouco, além de consumir aproximadamente <strong>${this.pois.length * this.leituraPosicao.length}</strong> requisições de `)
                .concat(`suas cotas mensais da API do Google Maps.<br>Considere informar um filtro de POI 😉. <br><br>`)
                .concat(`Tem certeza que deseja continuar?`)
        };

        const dialogRef = this._dialog.open(DialogConfirmComponent, {
            maxWidth: "400px",
            data: dialogData
        });

        this._subscription.add(
            dialogRef.afterClosed().subscribe(dialogResult => {
                if (!dialogResult) {
                    return;
                }

                this._gMapService.$processarCalcularPoisEvent.next();
            })
        );
    }

    public redefinirFiltros() {
        this.formFiltro.get('poiId').reset();
        this.formFiltro.get('placa').reset();
        this.formFiltro.get('dataLeitura').reset();
    }

    public abrirLocalizacaoMapa(poi: Poi) {
        this.formFiltro.get('poiId').setValue(poi.id);
        this.visualizarPois();
    }

    public abrirDialogMemoriaCalculo(poi: Poi) {
        this._dialog.open(DialogMemoriaCalculoComponent, {
            data: {
                poi: poi
            },
        });
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}