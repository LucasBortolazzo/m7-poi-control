import * as moment from 'moment';
import { DateUtils } from 'src/app/shared/date-utils';
import { LeituraPosicao } from './model/leitura-posicao';
import { Poi } from './model/poi';
import { PoisVeiculosTotalizador } from './model/pois-veiculos-totalizador';
import { dadosFicticiosVeiculos, Veiculo } from './model/veiculo';
import { VeiculoLeitura } from './model/veiculo-leitura';

export default class calculoPoiUtils {

    private static dadosVeiculo: Veiculo[] = dadosFicticiosVeiculos;

    static processarPoisLeiturasVeiculos(leituraPosicao: LeituraPosicao[], pois: Poi[], poiFilter?: Poi) {
        const poisVeiculosTotalizadores: PoisVeiculosTotalizador[] = [];
        const leiturasPosicaoveiculosPoi: LeituraPosicao[] = [];

        leituraPosicao.forEach((leituraPosicao: LeituraPosicao) => {

            pois.forEach((poi: Poi) => {
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

                const dadosFicticiosVeiculo = this.dadosVeiculo
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

        return poisVeiculosTotalizadores;
    }

    static gerarLeiturasPosicaoVeiculosOutPoi(poisVeiculosTotalizador: PoisVeiculosTotalizador[], leituraPosicao: LeituraPosicao[]) {
        let leituraPosicaoFilterData: LeituraPosicao[] = JSON.parse(JSON.stringify(leituraPosicao));
        const leiturasPosicaoveiculosOutPoi: VeiculoLeitura[] = [];
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
            newLeituraPosicao.center = { lat: newLeituraPosicao.latitude, lng: newLeituraPosicao.longitude };

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

                const dadosFicticiosVeiculo = this.dadosVeiculo
                    .find((dadosVeiculo) => dadosVeiculo.placa.toUpperCase() === newLeituraPosicao.placa);

                const dadosVeiculoOutPoi: VeiculoLeitura = {
                    placa: newLeituraPosicao.placa.toUpperCase(),
                    leiturasVeiculo: [newLeituraPosicao],
                    totalizadorTempoVeiculo: null,
                    dadosFicticiosVeiculo: dadosFicticiosVeiculo || null,
                    overlay: 'infoWindow',
                };

                const indexVeiculoOutPoiList = leiturasPosicaoveiculosOutPoi.findIndex((veiculoLeitura: VeiculoLeitura) => {
                    return veiculoLeitura.placa.toUpperCase() === newLeituraPosicao.placa.toUpperCase();
                });

                if (indexVeiculoOutPoiList === -1) {
                    leiturasPosicaoveiculosOutPoi.push(dadosVeiculoOutPoi);
                } else {
                    leiturasPosicaoveiculosOutPoi[indexVeiculoOutPoiList].leiturasVeiculo
                        .push(newLeituraPosicao);
                }
            }

        });

        return leiturasPosicaoveiculosOutPoi;
    }

    static calcularTempoTotalVeiculosInPoi(
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[],
        dataPoiTable: Poi[]
    ) {
        const currentDate = moment().set({ "hour": 0, "minute": 0, "second": 0 });

        poisVeiculosTotalizadores.forEach(poiVeiculoTotalizador => {
            const dataInicialTotalizadores = moment().set({ "hour": 0, "minute": 0, "second": 0 });
            const dateTotalizadoresSomaTempoTotal = dataInicialTotalizadores.clone();

            poiVeiculoTotalizador.poi.veiculos.forEach(veiculo => {
                dateTotalizadoresSomaTempoTotal.add(veiculo.totalizadorTempoVeiculo.tempo_total_dia_veiculos, 'day');
                dateTotalizadoresSomaTempoTotal.add(veiculo.totalizadorTempoVeiculo.tempo_total_hora_veiculos, 'hour');
                dateTotalizadoresSomaTempoTotal.add(veiculo.totalizadorTempoVeiculo.tempo_total_minuto_veiculos, 'minutes');
            });

            const diffLeituraGeral = DateUtils.diffYMDHMS(
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
            if (!dataPoiTable.find((poi) => poi.id === poiVeiculoTotalizador.poi.id)) {
                dataPoiTable.push(poiVeiculoTotalizador.poi);
            }
        });

        return [...dataPoiTable];
    }

}