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
import { dadosFicticiosVeiculos, Veiculo } from './model/veiculo';
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

    private _poisVeiculosTotalizadoresOriginal: PoisVeiculosTotalizador[] = [];
    private _leiturasPosicaoveiculosOutPoi: VeiculoLeitura[] = [];
    private _dadosVeiculo: Veiculo[] = dadosFicticiosVeiculos;

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
    ) { }

    ngOnInit(): void {
        this._initializeMap();
        this._criarFormFiltro();
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
                        // this.pois = this.pois.slice(20, 24);
                        // this.leituraPosicao = this.leituraPosicao.slice(0, 100);
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

        this.leituraPosicao.map((leituraPosicao: LeituraPosicao) => {

            this.pois.map((poi: Poi) => {

                const newLeituraPosicao = Object.assign({}, leituraPosicao);

                if (!poi.veiculos) {
                    poi.veiculos = [];
                }

                poi.overlay = 'circle';
                poi.center = {
                    lat: poi.latitude,
                    lng: poi.longitude
                };
                poi.icon = 'parking_lot_maps.png';

                const poiCenter = {
                    lat: poi.latitude,
                    lng: poi.longitude,
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
                    newLeituraPosicao.distanciaParaPoi <= poi.raio;

                newLeituraPosicao.poiDescri = `Poi: ${poi.id} - ${poi.nome} - (lat: ${poi.latitude} lng: ${poi.longitude})`;

                newLeituraPosicao.center = leituraPosicaoCenter;

                let poiIndex = poisVeiculosTotalizadores.findIndex(
                    (value: PoisVeiculosTotalizador) => value.poi.id === poi.id
                );

                if (poiIndex === -1) {
                    poiIndex =
                        poisVeiculosTotalizadores.push({
                            poi: poi,
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

        this._poisVeiculosTotalizadoresOriginal = poisVeiculosTotalizadores;

        this._calcularPois();
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

        console.log(poisVeiculosTotalizadorFilterData);
        this._gerarLeiturasPosicaoVeiculosOutPoi(poisVeiculosTotalizadorFilterData);

        this._gerarGerarOvelays(poisVeiculosTotalizadorFilterData);
    }

    private _gerarOvelayPoi(poi: Poi) {
        this._gMapService.setMapcenter(poi.center);
        this._gMapService.createCircle(poi.raio);
    }

    private _gerarOverlayLeituraVeiculo(leituraVeiculo: VeiculoLeitura) {

        leituraVeiculo.leiturasVeiculo.forEach((leitura) => {
            switch (leituraVeiculo.overlay) {
                case 'infoWindow': {
                    const content = '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                        '<div id="bodyContent">' +
                        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
                        "sandstone rock formation in the southern part of the " +
                        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
                        "south west of the nearest large town, Alice Springs; 450&#160;km " +
                        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
                        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
                        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
                        "Aboriginal people of the area. It has many springs, waterholes, " +
                        "rock caves and ancient paintings. Uluru is listed as a World " +
                        "Heritage Site.</p>" +
                        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
                        "(last visited June 22, 2009).</p>" +
                        "</div>" +
                        "</div>";
                    this._gMapService.createInfoWindow(leitura.center, content);
                    return;
                }

                case 'marker': {
                    this._gMapService.createMarker(leitura.center, 'parking_lot_maps.png');
                    return;
                }
            }
        });
    }

    private _gerarGerarOvelays(poisVeiculosTotalizador: PoisVeiculosTotalizador[]) {
        this._gMapService.resetMap();

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

        console.log(this._leiturasPosicaoveiculosOutPoi);
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

            if (this._filtroForm.dataLeitura) {
                poisVeiculosTotalizadorFilterData =
                    poisVeiculosTotalizadorFilterData.filter(
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
        const detalhesError = `(Status: ${error.status}. ${error.message ? ` Detalhes: ${error.message}` : ''
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
