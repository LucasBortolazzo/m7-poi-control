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
import { TotalizadorTempo } from './model/totalizador-tempo';
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
        this._implementEvents();
        this._carregarDados();
    }

    private _implementEvents() {
        this._subscription.add(
            this._gMapService.$processarCalcularPoisEvent.subscribe({
                next: (newPoi: Poi) => {
                    if (newPoi && !this.pois.find((poi) => poi.id === newPoi.id)) {
                        this.pois.push(newPoi);
                        this._processarPoisLeiturasVeiculos(newPoi);
                        this.formFiltro.get('poi').setValue(newPoi);
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
                        this.exibirMensagemErro(e);
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

                const newLeituraPosicao = Object.assign({}, leituraPosicao);

                if (!poi.veiculos) {
                    poi.veiculos = [];
                }

                poi.overlay = 'circle';
                poi.center = {
                    lat: poi.latitude,
                    lng: poi.longitude
                };
                poi.icon = null;

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

        console.log(poisVeiculosTotalizadorFilterData);
        this._gerarLeiturasPosicaoVeiculosOutPoi(poisVeiculosTotalizadorFilterData);

        this._gerarGerarOvelays(poisVeiculosTotalizadorFilterData);
    }

    private _poiInfoWindowTemplate(poi: Poi): string {
        const poiRaio = (Math.round(poi.raio * 100) / 100).toFixed(2);
        let totalLeiturasPoi = 0;

        poi.veiculos.map((poiVeiculo) => poiVeiculo)
            .map((veiculoLeitura) => {
                totalLeiturasPoi += veiculoLeitura.leiturasVeiculo.length;
            });

        const content = '<div class="content" style="box-shadow: 0px 1px 17px 0px #aaa;">' + //inline style because infoWindow does not apply the styles defined in the class/ID. Possible bug in infoWindow??
            '<div id="#poiContent" style="display: flex;flex-direction: column;"> ' +
            '<p class="poi-title" style="text-align: center;font-size: 1.5rem;font-weight: bold;color: #3f51b5;"> ' + poi.id + ' - ' + poi.nome + ' </p>' +
            '<p class="poi-subtitle" style="font-style: italic;"> Latitude: ' + poi.latitude + ', Longitude: ' + poi.longitude + ', Raio: ' + poiRaio.toString() + ' Metros </p>' +
            '<p class="poi-totalizador"> Tempo total de veículos no POI: <span style="font-size: 1.4rem;font-weight: bold;">' + poi.totalizadorPoi.tempo_total_dia_veiculos +
            ' dia(s), ' + poi.totalizadorPoi.tempo_total_hora_veiculos + ' hora(s) e ' + poi.totalizadorPoi.tempo_total_minuto_veiculos + ' minuto(s) </span></p > ' +
            '<p class="poi-totalizador" > Total de veículos distintos no POI: <span style="font-size: 1.4rem;font-weight: bold;"> ' + poi.veiculos.length + ' </span></p> ' +
            '<p class="poi-totalizador" > Total de leituras de veículos no POI: <span style="font-size: 1.4rem;font-weight: bold;"> ' + totalLeiturasPoi + ' </span></p> ' +
            '</div>' +
            '</div>';

        return content;
    }

    private _veiculoLeituraWindowTemplate(leituraPosicao: LeituraPosicao, dadosVeiculo: Veiculo, totalizadorTempoVeiculo: TotalizadorTempo): string {
        const dadosExibicao = {
            nome: dadosVeiculo.nome,
            placa: dadosVeiculo.placa,
            chassi: dadosVeiculo.chassi,
            renavan: dadosVeiculo.renavan,
            modelo: dadosVeiculo.modelo,
            cor: dadosVeiculo.cor,
            anoFabicacao: dadosVeiculo.anoFabicacao,
            tempoTotalVeiculoInPoi: totalizadorTempoVeiculo ? totalizadorTempoVeiculo.tempo_total_dia_veiculos + ' dia(s), ' +
                totalizadorTempoVeiculo.tempo_total_hora_veiculos + ' hora(s) ' +
                totalizadorTempoVeiculo.tempo_total_minuto_veiculos + ' minuto(s)' : 'N/A',
            emMovimento: leituraPosicao.ignicao ? 'Sim' : 'Não',
            latitude: leituraPosicao.latitude,
            longitude: leituraPosicao.longitude,
            velocidade: leituraPosicao.velocidade || 0,
            data: leituraPosicao.data ? formatDate(leituraPosicao.data, 'dd/MM/yyyy hh:MM:ss', 'pt-BR') : 'N/A',
            distanciaParaPoi: leituraPosicao.distanciaParaPoi || 0,
            inPoiRadius: leituraPosicao.inPoiRadius ? 'Sim' : 'Não',
            leituraPosicao: leituraPosicao.inPoiRadius,
            poiDescri: leituraPosicao.poiDescri
        };

        const content = '<div class="content" style="box-shadow: 0px 1px 17px 0px #aaa;">' + //inline style because infoWindow does not apply the styles defined in the class/ID. Possible bug in infoWindow??
            '<div id="#poiContent" style="display: flex;flex-direction: column;"> ' +
            '<p class="poi-title" style="text-align: center;font-size: 1.5rem;font-weight: bold;color: #3f51b5;"> ' + dadosExibicao.nome + ' - ' + dadosExibicao.placa + ' - ' + dadosExibicao.data + ' </p>' +
            '<p class="poi-subtitle" style=""> Chassi: ' + dadosExibicao.chassi + ', Renavan: ' + dadosExibicao.renavan + '</p>' +
            '<p class="poi-subtitle" style="font-style: italic;"> Latitude: ' + dadosExibicao.latitude + ', Longitude: ' + dadosExibicao.longitude + ', Velocidade: ' + dadosExibicao.velocidade + ' KM/H <span>, Mov: ' + dadosExibicao.emMovimento + '</span>  </p>' +
            '<p>Tempo total do veículo no POI: <span style="font-size: 1.4rem;font-weight: bold;">' + dadosExibicao.tempoTotalVeiculoInPoi + '</span> </p>' +
            '<p class="poi-totalizador">Distância para POI: <span style="font-size: 1.4rem;font-weight: bold;"> ' + dadosExibicao.distanciaParaPoi + '</span>, <span> Leitura no raio do POI: ' + dadosExibicao.inPoiRadius + '</span> </p> ' +
            '<p class="poi-totalizador" style="font-size: 1.2rem;font-style: italic"> POI Referência: <span style="font-size: 1.2rem;font-style: italic;"> ' + dadosExibicao.poiDescri + ' </span></p> ' +
            '</div>' +
            '</div>';

        return content;
    }

    private _gerarOvelayPoi(poi: Poi) {
        this._gMapService.createCircle(poi.raio, poi.center);
        this._gMapService.createMarkerInfoWindow(poi.center, this._poiInfoWindowTemplate(poi), 'opened');

        setTimeout(() => {
            this._gMapService.setMapcenter(poi.center);
        }, 600);
    }

    private _gerarOverlayLeituraVeiculo(leituraVeiculo: VeiculoLeitura) {

        leituraVeiculo.leiturasVeiculo.forEach((leitura) => {
            switch (leituraVeiculo.overlay) {
                case 'infoWindow': {
                    this._gMapService.createMarkerInfoWindow(leitura.center, this._veiculoLeituraWindowTemplate(leitura,
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
        this._gMapService.$processarCalcularPoisEvent.next();
    }

    public redefinirFiltros() {
        this.formFiltro.reset();
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }
}
