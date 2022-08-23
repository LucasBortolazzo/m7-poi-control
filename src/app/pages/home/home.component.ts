import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    debounceTime,
    delay,
    filter,
    finalize,
    forkJoin,
    map,
    Observable,
    retry,
    startWith,
    Subscription,
} from 'rxjs';

import * as moment from 'moment';

import { DialogMemoriaCalculoComponent } from '../dialog-memoria-calculo/dialog-memoria-calculo.component';
import { FilterForm } from './model/filtro-form';
import { LeituraPosicao } from './model/leitura-posicao';
import { Poi } from './model/poi';
import { PoisVeiculosTotalizador } from './model/pois-veiculos-totalizador';
import { TotalizadorTempo } from './model/totalizador-tempo';
import { dadosFicticiosVeiculos, Veiculo } from './model/veiculo';
import { VeiculoLeitura } from './model/veiculo-leitura';
import { GMapService } from './services/gmap.service';
import { PoiService } from './services/poi.service';
import TemplateUtils from 'src/app/shared/template-utils';

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
    private _dadosVeiculo: Veiculo[] = dadosFicticiosVeiculos;

    public dataPoiTable: Poi[] = [];
    public formFiltro: FormGroup;
    public loading = false;
    public pois: Poi[] = [];
    public placas: string[] = [];
    public leituraPosicao: LeituraPosicao[] = [];
    public displayedColumns: string[] = ['id', 'nome', 'latitude', 'longitude', 'raio', 'veiculos', 'totalizadorPoi', 'verNoMapa', 'verDadosMemoriaCalculo'];

    constructor(
        private _fb: FormBuilder,
        private _snackBar: MatSnackBar,
        private _gMapService: GMapService,
        private _poiService: PoiService,
        private _dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this._initializeMap();
        this._criarFormFiltro();
        this._implementEvents();
        this._carregarDados();
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
            this._gMapService.$processarCalcularPoisEvent.subscribe({
                next: (newPoi: Poi) => {
                    if (newPoi && !this.pois.find((poi) => poi.id === newPoi.id)) {
                        this.pois.push(newPoi);
                        this._processarPoisLeiturasVeiculos(newPoi);
                        this.formFiltro.get('poiId').setValue(newPoi.id);

                        this._exibirMensagem('O POI selecionado nao foi encontrado na lista de POIs pre-cadastrados, portanto ele '
                            .concat('sera calculado temporariamente, considerando o novo raio, e ficara disponivel somente ate a pagina ser recarregada.'), 7000);
                    };

                    if (!this._poisVeiculosTotalizadoresOriginal.length) {
                        this._processarPoisLeiturasVeiculos();
                    };

                    this._gMapService.resetMap();

                    this._calcularPois();
                },
                error: (e: any) => {
                    console.error('Ocorreu um erro inesperado. ' + e);
                },
            })
        );
    }

    private _initializeMap() {
        this._gMapService._initializeMap(
            document.querySelector('#map') as HTMLElement
        );
    }

    private _criarFormFiltro() {
        this.formFiltro = this._fb.group({
            poiId: [null],
            placa: [null],
            dataLeitura: [null],
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

    private _carregarLeituraPosicao() {
        this.loading = true;

        this._subscription.add(
            this._poiService
                .getLeituraPosicao(this._filtroForm)
                .pipe(
                    retry(3),
                    finalize(() => {
                        this.loading = false;
                    })
                )
                .subscribe({
                    next: (leituraPosicao: LeituraPosicao[]) => {
                        this.leituraPosicao = leituraPosicao;
                    },
                    error: e => {
                        this._exibirMensagemErro(e);
                    },
                })
        );
    }

    private _carregarDados() {
        this.loading = true;

        const dadosSource$ = forkJoin({
            pois: this._poiService.getPois(),
            placas: this._poiService.getPlacas(),
            leituraPosicao: this._poiService.getLeituraPosicao(),
        });

        this._subscription.add(
            dadosSource$
                .pipe(
                    finalize(() => {
                        this.loading = false;
                        this._gMapService.$processarCalcularPoisEvent.next();
                    })
                )
                .subscribe({
                    next: (dados: any) => {
                        this.pois = dados?.pois || [];
                        this.placas = dados?.placas || [];
                        this.leituraPosicao = dados?.leituraPosicao || [];

                        // TODO: Remover no final
                        // this.pois = this.pois.slice(20, 24);
                        // this.leituraPosicao = this.leituraPosicao.slice(0, 100);
                    },
                    error: (e: HttpErrorResponse) => {
                        this._exibirMensagemErro(e);
                    },
                })
        );
    }

    private _processarPoisLeiturasVeiculos(poiFilter?: Poi) {
        const poisVeiculosTotalizadores: PoisVeiculosTotalizador[] = [];
        const leiturasPosicaoveiculosPoi: LeituraPosicao[] = [];

        this.leituraPosicao.map((leituraPosicao: LeituraPosicao) => {

            this.pois.forEach((poi: Poi) => {
                if (poiFilter && poi.id !== poiFilter.id) {
                    return;
                }

                const newPoi = Object.assign({}, poi);
                const newLeituraPosicao = Object.assign({}, leituraPosicao);

                if (!newPoi.veiculos) {
                    newPoi.veiculos = [];
                }

                newPoi.overlay = 'circle';
                newPoi.center = {
                    lat: newPoi.latitude,
                    lng: newPoi.longitude
                };
                newPoi.icon = null;

                newPoi.raio = +(Math.round(newPoi.raio * 100) / 100).toFixed(2);

                const poiCenter = {
                    lat: newPoi.latitude,
                    lng: newPoi.longitude,
                };

                const leituraPosicaoCenter = {
                    lat: newLeituraPosicao.latitude,
                    lng: newLeituraPosicao.longitude,
                };

                newLeituraPosicao.distanciaParaPoi =
                    google.maps.geometry.spherical.computeDistanceBetween(
                        poiCenter,
                        leituraPosicaoCenter
                    );

                newLeituraPosicao.inPoiRadius =
                    newLeituraPosicao.distanciaParaPoi <= newPoi.raio;

                newLeituraPosicao.poiDescri = `Poi: ${newPoi.id} - ${newPoi.nome} - (lat: ${newPoi.latitude} lng: ${newPoi.longitude})`;

                newLeituraPosicao.center = leituraPosicaoCenter;

                let poiIndex = poisVeiculosTotalizadores.findIndex(
                    (value: PoisVeiculosTotalizador) => value.poi.id === newPoi.id
                );

                if (poiIndex === -1) {
                    poiIndex =
                        poisVeiculosTotalizadores.push({
                            poi: newPoi,
                        }) - 1;
                }

                if (!newLeituraPosicao.inPoiRadius) {
                    return;
                }

                const dadosFicticiosVeiculo = this._dadosVeiculo
                    .find((dadosVeiculo) => dadosVeiculo.placa.toUpperCase() === newLeituraPosicao.placa);

                const veiculoLeitura: VeiculoLeitura = {
                    placa: newLeituraPosicao.placa,
                    leiturasVeiculo: [],
                    totalizadorTempoVeiculo: null,
                    overlay: 'infoWindow',
                    dadosFicticiosVeiculo: dadosFicticiosVeiculo || null
                };

                let veiculoInPoiIndex = poisVeiculosTotalizadores[
                    poiIndex
                ].poi.veiculos.findIndex(
                    veiculo =>
                        veiculo.placa.toUpperCase() ===
                        newLeituraPosicao.placa.toUpperCase()
                );

                if (veiculoInPoiIndex === -1) {
                    veiculoInPoiIndex =
                        poisVeiculosTotalizadores[poiIndex].poi.veiculos.push(
                            veiculoLeitura
                        ) - 1;
                }

                poisVeiculosTotalizadores[poiIndex].poi.veiculos[
                    veiculoInPoiIndex
                ].leiturasVeiculo.push(Object.assign(newLeituraPosicao));
            });
        });

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

    private _gerarOvelayPoi(poi: Poi) {
        this._gMapService.createCircle(poi.raio, poi.center);
        this._gMapService.createMarkerInfoWindow(poi.center, TemplateUtils.poiInfoWindowTemplate(poi), 'opened');

        setTimeout(() => {
            this._gMapService.setMapcenter(poi.center);
        }, 1000);
    }

    private _gerarOverlayLeituraVeiculo(leituraVeiculo: VeiculoLeitura) {

        leituraVeiculo.leiturasVeiculo.forEach((leitura) => {
            switch (leituraVeiculo.overlay) {
                case 'infoWindow': {
                    this._gMapService.createMarkerInfoWindow(leitura.center, TemplateUtils.veiculoLeituraWindowTemplate(leitura,
                        leituraVeiculo.dadosFicticiosVeiculo, leituraVeiculo.totalizadorTempoVeiculo), 'closed', 'car-test.png');
                    return;
                }
            }
        });
    }

    private _gerarGerarOvelays(poisVeiculosTotalizador: PoisVeiculosTotalizador[]) {
        poisVeiculosTotalizador.forEach((poiVeiculoTotalizador) => {
            this._gerarOvelayPoi(poiVeiculoTotalizador.poi);

            poiVeiculoTotalizador.poi.veiculos.forEach((veiculoInPoi) => {
                this._gerarOverlayLeituraVeiculo(veiculoInPoi);
            });
        });

        this._leiturasPosicaoveiculosOutPoi.forEach((veiculoOutPoi) => {
            if (veiculoOutPoi.overlay) {
                this._gerarOverlayLeituraVeiculo(veiculoOutPoi);
            }
        });
    }

    private _gerarLeiturasPosicaoVeiculosOutPoi(poisVeiculosTotalizador: PoisVeiculosTotalizador[]) {
        let leituraPosicaoFilterData: LeituraPosicao[] = JSON.parse(JSON.stringify(this.leituraPosicao));
        this._leiturasPosicaoveiculosOutPoi = [];
        const veiculosLeiturasPois: LeituraPosicao[] = [];

        poisVeiculosTotalizador.forEach((poiVeiculoTotalizador) => {
            poiVeiculoTotalizador.poi.veiculos.forEach((veiculoPoi) => {
                veiculoPoi.leiturasVeiculo.forEach((leituraPosicao) => {
                    veiculosLeiturasPois.push(leituraPosicao);
                });
            });
        });

        leituraPosicaoFilterData.forEach((leituraPosicao) => {
            const newLeituraPosicao: LeituraPosicao = Object.assign({}, leituraPosicao);
            newLeituraPosicao.inPoiRadius = false;
            newLeituraPosicao.distanciaParaPoi = null;

            const leituraProcessadaInPoi = veiculosLeiturasPois.find((veiculoLeitura) => {
                return veiculoLeitura.placa.toUpperCase() === newLeituraPosicao.placa.toUpperCase() &&
                    veiculoLeitura.id === newLeituraPosicao.id &&
                    veiculoLeitura.latitude === newLeituraPosicao.latitude &&
                    veiculoLeitura.longitude === newLeituraPosicao.longitude;
            }) || false;

            const placaProcessadaInPoi = veiculosLeiturasPois.find((veiculoLeitura) => {
                return veiculoLeitura.placa.toUpperCase() === newLeituraPosicao.placa.toUpperCase();
            }) || false;

            if (!leituraProcessadaInPoi && placaProcessadaInPoi) {

                const dadosFicticiosVeiculo = this._dadosVeiculo
                    .find((dadosVeiculo) => dadosVeiculo.placa.toUpperCase() === newLeituraPosicao.placa);

                const dadosVeiculoOutPoi: VeiculoLeitura = {
                    placa: newLeituraPosicao.placa.toUpperCase(),
                    leiturasVeiculo: [newLeituraPosicao],
                    totalizadorTempoVeiculo: null,
                    dadosFicticiosVeiculo: dadosFicticiosVeiculo || null,
                    overlay: 'infoWindow',
                };

                const indexVeiculoOutPoiList = this._leiturasPosicaoveiculosOutPoi.findIndex((veiculoLeitura: VeiculoLeitura) => {
                    return veiculoLeitura.placa.toUpperCase() === newLeituraPosicao.placa.toUpperCase();
                });

                if (indexVeiculoOutPoiList === -1) {
                    this._leiturasPosicaoveiculosOutPoi.push(dadosVeiculoOutPoi);
                } else {
                    this._leiturasPosicaoveiculosOutPoi[indexVeiculoOutPoiList].leiturasVeiculo
                        .push(newLeituraPosicao);
                }
            }

        });
    }

    private _calcularTempoTotalVeiculosInPoi(
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[]
    ) {
        const currentDate = moment().set({ "hour": 0, "minute": 0, "second": 0 });

        poisVeiculosTotalizadores.map(poiVeiculoTotalizador => {
            const dataInicialTotalizadores = moment().set({ "hour": 0, "minute": 0, "second": 0 });
            const dateTotalizadoresSomaTempoTotal = dataInicialTotalizadores.clone();

            poiVeiculoTotalizador.poi.veiculos.forEach(veiculo => {
                dateTotalizadoresSomaTempoTotal.add(veiculo.totalizadorTempoVeiculo.tempo_total_dia_veiculos, 'day');
                dateTotalizadoresSomaTempoTotal.add(veiculo.totalizadorTempoVeiculo.tempo_total_hora_veiculos, 'hour');
                dateTotalizadoresSomaTempoTotal.add(veiculo.totalizadorTempoVeiculo.tempo_total_minuto_veiculos, 'minutes');
            });

            const diffLeituraGeral = this.diffYMDHMS(
                dataInicialTotalizadores,
                dateTotalizadoresSomaTempoTotal
            );

            poiVeiculoTotalizador.poi.totalizadorPoi = {
                tempo_total_dia_veiculos: diffLeituraGeral.days,
                tempo_total_hora_veiculos: diffLeituraGeral.hours,
                tempo_total_minuto_veiculos: diffLeituraGeral.minutes,
            };
        });

        poisVeiculosTotalizadores.forEach((poiVeiculoTotalizador) => {
            if (!this.dataPoiTable.find((poi) => poi.id === poiVeiculoTotalizador.poi.id)) {
                this.dataPoiTable.push(poiVeiculoTotalizador.poi);
            }
        });

        this.dataPoiTable = [...this.dataPoiTable];
    }

    diffYMDHMS(date1: moment.Moment, date2: moment.Moment) {
        let years = date1.diff(date2, 'year');
        date2.add(years, 'years');

        let months = date1.diff(date2, 'months');
        date2.add(months, 'months');

        let days = date1.diff(date2, 'days');
        date2.add(days, 'days');

        let hours = date1.diff(date2, 'hours');
        date2.add(hours, 'hours');

        let minutes = date1.diff(date2, 'minutes');
        date2.add(minutes, 'minutes');

        let seconds = date1.diff(date2, 'seconds');

        years = Math.abs(years);
        months = Math.abs(months);
        days = Math.abs(days);
        hours = Math.abs(hours);
        minutes = Math.abs(minutes);
        seconds = Math.abs(seconds);

        return { years, months, days, hours, minutes, seconds };
    }

    private _calcularTempoVeiculosInPoi(
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[]
    ) {
        poisVeiculosTotalizadores.forEach(poiVeiculoTotalizador => {
            poiVeiculoTotalizador.poi.veiculos.map(veiculo => {
                const dataPrimeiraLeituraGeral = moment(
                    veiculo.leiturasVeiculo[0]?.data?.toString()
                );
                const dataUltimaLeituraGeral = moment(
                    veiculo.leiturasVeiculo[
                        veiculo.leiturasVeiculo.length - 1
                    ]?.data?.toString()
                );

                const diffLeituraGeral = this.diffYMDHMS(
                    dataPrimeiraLeituraGeral,
                    dataUltimaLeituraGeral
                );

                veiculo.totalizadorTempoVeiculo = {
                    tempo_total_dia_veiculos: diffLeituraGeral.days,
                    tempo_total_hora_veiculos: diffLeituraGeral.hours,
                    tempo_total_minuto_veiculos: diffLeituraGeral.minutes,
                };
            });
        });
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
                                    poiVeiculoTotalizador.poi.veiculos[i].leiturasVeiculo[j].data,
                                    'dd/MM/yyyy',
                                    'pt-BR',
                                    '+00:00'
                                );
                                const dataFiltro = formatDate(
                                    this._filtroForm.dataLeitura,
                                    'dd/MM/yyyy',
                                    'pt-BR',
                                    '+00:00'
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

    private _exibirMensagem(mensagem: string, duracao?: number,) {
        this._snackBar.open(mensagem, 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: duracao ? duracao : 5000,
        });
    }

    private _exibirMensagemErro(error: HttpErrorResponse) {
        const detalhesError = `(Status: ${error.status}. ${error.message ? ` Detalhes: ${error.message}` : ''
            })`;
        const message = ` Ops! Algo deu errado. Por favor, tente novamente mais tarde. ${detalhesError}`;

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

    public visualizarPois() {
        this._gMapService.$processarCalcularPoisEvent.next();
        this._esconderFiltros();
    }

    public redefinirFiltros() {
        this.formFiltro.reset();
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
