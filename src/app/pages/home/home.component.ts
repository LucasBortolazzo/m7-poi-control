import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
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

import { FilterForm } from './model/filtro-form';
import { LeituraPosicao } from './model/leitura-posicao';
import { Poi } from './model/poi';
import { PoisVeiculosTotalizador } from './model/pois-veiculos-totalizador';
import { VeiculoLeitura } from './model/veiculo-leitura';

import { GMapService } from './services/gmap.service';
import { PoiService } from './services/poi.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    private _subscription: Subscription = new Subscription();
    private _map: google.maps.Map;

    private _circle: google.maps.Circle;

    private _poisVeiculosTotalizadorData: {
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[];
        leiturasPosicaoveiculosPoi: LeituraPosicao[];
    };

    public formFiltro: FormGroup;

    public loading = false;
    public pois: Poi[] = [];
    public placas: string[] = [];
    public leituraPosicao: LeituraPosicao[] = [];

    constructor(
        private _fb: FormBuilder,
        private _snackBar: MatSnackBar,
        private _gMapService: GMapService,
        private _poiService: PoiService
    ) {}

    ngOnInit(): void {
        this._initializeMap();
        this._criarFormFiltro();
        this._implementEvents();
        this._carregarDados();
    }

    private _initializeMap() {
        this._gMapService._initializeMap(
            document.querySelector('#map') as HTMLElement
        );
    }

    private _criarFormFiltro() {
        this.formFiltro = this._fb.group({
            poi: [null],
            placa: [null],
            dataLeitura: [null],
        });
    }

    private _implementEvents() {
        this.formFiltro.get('poi').valueChanges.subscribe({
            next: (selectedPoi: Poi) => {
                if (!selectedPoi) {
                    this._gMapService.setMapcenter(null);
                    return;
                }
                const center = {
                    lat: selectedPoi.latitude,
                    lng: selectedPoi.longitude,
                };
                this._gMapService.setMapcenter(center);
                this._gMapService.createCircle(selectedPoi.raio);
            },
        });
    }

    private get _filtroForm(): FilterForm {
        const poi = this.formFiltro.get('poi').value || null;
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
                        this.exibirMensagemErro(e);
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

                        this._processarPoisLeiturasVeiculos();
                    })
                )
                .subscribe({
                    next: (dados: any) => {
                        this.pois = dados?.pois || [];
                        this.placas = dados?.placas || [];
                        this.leituraPosicao = dados?.leituraPosicao || [];

                        // TODO: Remover no final
                        this.pois = this.pois.slice(23, 24);
                        this.leituraPosicao = this.leituraPosicao.slice(0, 3);
                    },
                    error: (e: HttpErrorResponse) => {
                        this.exibirMensagemErro(e);
                    },
                })
        );
    }

    private _processarPoisLeiturasVeiculos() {
        const poisVeiculosTotalizadores: PoisVeiculosTotalizador[] = [];
        const leiturasPosicaoveiculosPoi: LeituraPosicao[] = [];

        this.leituraPosicao.forEach((leituraPosicao: LeituraPosicao) => {
            this.pois.forEach((poi: Poi) => {
                if (!poi.veiculos) {
                    poi.veiculos = [];
                }

                const poiCenter = {
                    lat: poi.latitude,
                    lng: poi.longitude,
                };

                const LeituraPosicaoCenter = {
                    lat: leituraPosicao.latitude,
                    lng: leituraPosicao.longitude,
                };

                leituraPosicao.distanciaParaPoi =
                    google.maps.geometry.spherical.computeDistanceBetween(
                        poiCenter,
                        LeituraPosicaoCenter
                    );

                leituraPosicao.leituraPosicaoInPoiRadius =
                    leituraPosicao.distanciaParaPoi <= poi.raio;

                let poiIndex = poisVeiculosTotalizadores.findIndex(
                    (value: PoisVeiculosTotalizador) => value.poi.id === poi.id
                );

                if (poiIndex == -1) {
                    poiIndex =
                        poisVeiculosTotalizadores.push({
                            poi: poi,
                            totalizadorTempoPoi: null,
                        }) - 1;
                }

                if (!leituraPosicao.leituraPosicaoInPoiRadius) {
                    return;
                }

                const veiculoLeitura: VeiculoLeitura = {
                    placa: leituraPosicao.placa,
                    leiturasVeiculo: [],
                    totalizadorTempoVeiculo: null,
                    overlay: ['circle'],
                };

                let veiculoInPoiIndex = poisVeiculosTotalizadores[
                    poiIndex
                ].poi.veiculos.findIndex(
                    veiculo =>
                        veiculo.placa.toUpperCase() ===
                        leituraPosicao.placa.toUpperCase()
                );

                if (veiculoInPoiIndex === -1) {
                    veiculoInPoiIndex =
                        poisVeiculosTotalizadores[poiIndex].poi.veiculos.push(
                            veiculoLeitura
                        ) - 1;
                }

                poisVeiculosTotalizadores[poiIndex].poi.veiculos[
                    veiculoInPoiIndex
                ].leiturasVeiculo.push(leituraPosicao);
            });
        });

        this._poisVeiculosTotalizadorData = {
            poisVeiculosTotalizadores: poisVeiculosTotalizadores,
            leiturasPosicaoveiculosPoi: leiturasPosicaoveiculosPoi,
        };

        console.log(this._poisVeiculosTotalizadorData);

        this._calcularPois();
    }

    private _calcularPois() {
        let poisVeiculosTotalizadorFilterData =
            this._poisVeiculosTotalizadorFilterData;

        this._ordenarPosicaoLeituraVeiculosPorDataLeitura(
            poisVeiculosTotalizadorFilterData.poisVeiculosTotalizadores
        );

        this._calcularTempoVeiculosInPoi(
            poisVeiculosTotalizadorFilterData.poisVeiculosTotalizadores
        );

        this._calcularTempoTotalVeiculosInPoi(
            poisVeiculosTotalizadorFilterData.poisVeiculosTotalizadores
        );
    }

    private _calcularTempoTotalVeiculosInPoi(
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[]
    ) {}

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

                const leiturasVeiculoMovimento = veiculo.leiturasVeiculo.filter(
                    leiturasVeiculo => leiturasVeiculo.ignicao === true
                );
                const dataPrimeiraLeituraMovimento = moment(
                    leiturasVeiculoMovimento[0]?.data?.toString()
                );
                const dataUltimaLeituraMovimento = moment(
                    leiturasVeiculoMovimento[
                        leiturasVeiculoMovimento.length - 1
                    ]?.data?.toString()
                );

                const leiturasVeiculoParado = veiculo.leiturasVeiculo.filter(
                    leiturasVeiculo => leiturasVeiculo.ignicao === false
                );
                const dataPrimeiraLeituraParado = moment(
                    leiturasVeiculoParado[0]?.data?.toString()
                );
                const dataUltimaLeituraParado = moment(
                    leiturasVeiculoParado[
                        leiturasVeiculoParado.length - 1
                    ]?.data?.toString()
                );

                veiculo.totalizadorTempoVeiculo = {
                    tempo_total_dia_veiculos: Math.abs(
                        dataPrimeiraLeituraGeral.diff(
                            dataUltimaLeituraGeral,
                            'days'
                        ) || 0
                    ),
                    tempo_total_hora_veiculos: Math.abs(
                        dataPrimeiraLeituraGeral.diff(
                            dataUltimaLeituraGeral,
                            'hours'
                        ) || 0
                    ),
                    tempo_total_minuto_veiculos: Math.abs(
                        dataPrimeiraLeituraGeral.diff(
                            dataUltimaLeituraGeral,
                            'minutes'
                        ) || 0
                    ),

                    tempo_total_dia_veiculos_movimento: Math.abs(
                        dataPrimeiraLeituraMovimento.diff(
                            dataUltimaLeituraMovimento,
                            'days'
                        ) || 0
                    ),
                    tempo_total_hora_veiculos_movimento: Math.abs(
                        dataPrimeiraLeituraMovimento.diff(
                            dataUltimaLeituraMovimento,
                            'hours'
                        ) || 0
                    ),
                    tempo_total_minuto_veiculos_movimento: Math.abs(
                        dataPrimeiraLeituraMovimento.diff(
                            dataUltimaLeituraMovimento,
                            'minutes'
                        ) || 0
                    ),

                    tempo_total_dia_veiculos_parado: Math.abs(
                        dataPrimeiraLeituraGeral.diff(
                            dataUltimaLeituraParado,
                            'days'
                        ) || 0
                    ),
                    tempo_total_hora_veiculos_parado: Math.abs(
                        dataPrimeiraLeituraParado.diff(
                            dataUltimaLeituraParado,
                            'hours'
                        ) || 0
                    ),
                    tempo_total_minuto_veiculos_parado: Math.abs(
                        dataPrimeiraLeituraParado.diff(
                            dataUltimaLeituraParado,
                            'minutes'
                        ) || 0
                    ),
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

    private get _poisVeiculosTotalizadorFilterData() {
        const poisVeiculosTotalizadorFilterData = {
            ...this._poisVeiculosTotalizadorData,
        };

        if (this._filtroForm) {
            if (this._filtroForm.poi) {
                poisVeiculosTotalizadorFilterData.poisVeiculosTotalizadores =
                    poisVeiculosTotalizadorFilterData.poisVeiculosTotalizadores.filter(
                        poiVeiculoTotalizador =>
                            poiVeiculoTotalizador.poi.id ===
                            this._filtroForm.poi.id
                    );
            }

            if (this._filtroForm.placa) {
                poisVeiculosTotalizadorFilterData.poisVeiculosTotalizadores =
                    poisVeiculosTotalizadorFilterData.poisVeiculosTotalizadores.filter(
                        ({ poi }) =>
                            poi.veiculos.some(({ leiturasVeiculo }) =>
                                leiturasVeiculo.some(
                                    ({ placa }) =>
                                        placa.toLocaleLowerCase() ===
                                        this._filtroForm.placa.toLowerCase()
                                )
                            )
                    );
            }

            if (this._filtroForm.dataLeitura) {
                poisVeiculosTotalizadorFilterData.poisVeiculosTotalizadores =
                    poisVeiculosTotalizadorFilterData.poisVeiculosTotalizadores.filter(
                        ({ poi }) =>
                            poi.veiculos.some(({ leiturasVeiculo }) =>
                                leiturasVeiculo.some(({ data }) => {
                                    const dataLeitura = formatDate(
                                        data,
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

                                    return dataLeitura === dataFiltro;
                                })
                            )
                    );
            }
        }

        return poisVeiculosTotalizadorFilterData;
    }

    private _exibirMensagem(mensagem: string) {
        this._snackBar.open(mensagem, 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 2000,
        });
    }

    public exibirMensagemErro(error: HttpErrorResponse) {
        const detalhesError = `(Status: ${error.status}. ${
            error.message ? ` Detalhes: ${error.message}` : ''
        })`;
        const message = `🌧 Ops! Algo deu errado. Por favor, tente novamente mais tarde. ${detalhesError}`;

        this._snackBar.open(message, 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 10000,
        });
    }

    public visualizarPois() {
        this._calcularPois();
    }

    public redefinirFiltros() {
        this.formFiltro.reset();
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
