import * as moment from 'moment';
import { DateUtils } from 'src/app/shared/date-utils';
import { LeituraPosicao } from './model/leitura-posicao';
import { Poi } from './model/poi';
import { PoisVeiculosTotalizador } from './model/pois-veiculos-totalizador';
import { dadosFicticiosVeiculos, Veiculo } from './model/veiculo';
import { VeiculoLeitura } from './model/veiculo-leitura';

export default class calculoPoiUtils {

    private static dadosVeiculo: Veiculo[] = dadosFicticiosVeiculos;

    static processarPoisLeiturasVeiculos(leituras: LeituraPosicao[], pois: Poi[], poiFilter?: Poi) {
        const poisVeiculosTotalizadores: PoisVeiculosTotalizador[] = [];

        for (let leitura of leituras) {
            pois.map((poi) => {
                poi.veiculos = poi.veiculos ? poi.veiculos : [];
                poi.overlay = 'circle';
                poi.center = {
                    lat: poi.latitude,
                    lng: poi.longitude
                };
                poi.raio = +(Math.round(poi.raio * 100) / 100).toFixed(2);

                return poi;
            }).map((poi) => {

                if (poiFilter && poi.id !== poiFilter.id) {
                    return;
                }

                leitura.distanciaParaPoi =
                    google.maps.geometry.spherical.computeDistanceBetween(
                        { lat: poi.latitude, lng: poi.longitude },
                        { lat: leitura.latitude, lng: leitura.longitude }
                    );

                leitura.inPoiRadius = leitura.distanciaParaPoi <= poi.raio;
                leitura.poiDescri = `Poi: ${poi.id} - ${poi.nome} - (lat: ${poi.latitude} lng: ${poi.longitude})`;
                leitura.center = { lat: leitura.latitude, lng: leitura.longitude };

                let leiturasVeiculoInPoi = poisVeiculosTotalizadores.map((a) => a.poi).map((b) => {

                    return b.veiculos.filter((v) => {

                        if (v.placa === leitura.placa && poi.id === b.id) {
                            poi.veiculos = b.veiculos;
                            return true;
                        }

                        return false;
                    }
                    );
                }).map((l) => l.map((m) => m.leiturasVeiculo)).flat(2);

                const indexPoiDel = poisVeiculosTotalizadores.findIndex((p) => p.poi.id === poi.id);

                if (indexPoiDel > -1) {
                    poisVeiculosTotalizadores.splice(indexPoiDel, 1);
                }

                leiturasVeiculoInPoi.push(leitura);
                leiturasVeiculoInPoi = [...leiturasVeiculoInPoi];

                const veiculoLeitura: VeiculoLeitura = {
                    placa: leitura.placa,
                    leiturasVeiculo: leiturasVeiculoInPoi,
                    totalizadorTempoVeiculo: null,
                    overlay: 'infoWindow',
                    dadosFicticiosVeiculo: this.dadosVeiculo
                        .find((dadosVeiculo) => dadosVeiculo.placa.toUpperCase() === leitura.placa) || null
                };

                if (!poi.veiculos.find((v, index) => {
                    if (v.placa === leitura.placa) {
                        poi.veiculos[index] = veiculoLeitura;
                        return true;
                    }

                    return false;
                }
                ) && leitura.inPoiRadius) {
                    poi.veiculos.push(Object.assign(veiculoLeitura));
                }

                poisVeiculosTotalizadores.push({ poi: poi });
            });
        };

        return poisVeiculosTotalizadores;
    }

    static gerarLeiturasPosicaoVeiculosOutPoi(poisVeiculosTotalizador: PoisVeiculosTotalizador[], leiturasPosicao: LeituraPosicao[]) {
        const leiturasPosicaoveiculosOutPoi: VeiculoLeitura[] = [];

        const veiculosLeiturasPois: LeituraPosicao[] = poisVeiculosTotalizador.map((v) => v.poi.veiculos.map((veiculo) => veiculo.leiturasVeiculo.map((l) => l))).flat(3);

        for (let leituraPosicao of leiturasPosicao) {
            leituraPosicao.inPoiRadius = false;
            leituraPosicao.distanciaParaPoi = null;
            leituraPosicao.center = { lat: leituraPosicao.latitude, lng: leituraPosicao.longitude };
            let leituraProcessadaInPoi = false;
            let placaProcessadaInPoi = false;
            let veiculoOutPoi = false;

            veiculosLeiturasPois.find((veiculoLeitura) => {
                placaProcessadaInPoi = veiculoLeitura.placa.toUpperCase() === leituraPosicao.placa.toUpperCase();
                leituraProcessadaInPoi = placaProcessadaInPoi &&
                    veiculoLeitura.id === leituraPosicao.id &&
                    veiculoLeitura.latitude === leituraPosicao.latitude &&
                    veiculoLeitura.longitude === leituraPosicao.longitude;

                return leituraProcessadaInPoi;
            }) || false;

            if (!leituraProcessadaInPoi && placaProcessadaInPoi) {

                const dadosVeiculoOutPoi: VeiculoLeitura = {
                    placa: leituraPosicao.placa.toUpperCase(),
                    leiturasVeiculo: [leituraPosicao],
                    totalizadorTempoVeiculo: null,
                    dadosFicticiosVeiculo: this.dadosVeiculo
                        .find((dadosVeiculo) => dadosVeiculo.placa.toUpperCase() === leituraPosicao.placa.toUpperCase()) || null,
                    overlay: 'infoWindow',
                };

                leiturasPosicaoveiculosOutPoi.find((veiculoLeitura: VeiculoLeitura, index) => {
                    veiculoOutPoi = veiculoLeitura.placa.toUpperCase() === leituraPosicao.placa.toUpperCase();
                    if (veiculoOutPoi) {
                        leiturasPosicaoveiculosOutPoi[index].leiturasVeiculo.push(leituraPosicao);
                    }
                    return veiculoOutPoi;
                });

                !veiculoOutPoi ? leiturasPosicaoveiculosOutPoi.push(dadosVeiculoOutPoi) : null;
            }
        };

        return leiturasPosicaoveiculosOutPoi;
    }

    static calcularTempoTotalVeiculosInPoi(
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[]
    ) {

        poisVeiculosTotalizadores.map(poiVeiculoTotalizador => {
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
    }

    static calcularTempoVeiculosInPoi(
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[]
    ) {
        poisVeiculosTotalizadores.map((poiVeiculoTotalizador) =>
            poiVeiculoTotalizador.poi.veiculos.map((veiculo) => {
                const dataPrimeiraLeituraGeral = moment(
                    veiculo.leiturasVeiculo[0]?.data?.toString()
                );
                const dataUltimaLeituraGeral = moment(
                    veiculo.leiturasVeiculo[
                        veiculo.leiturasVeiculo.length - 1
                    ]?.data?.toString()
                );

                const diffLeituraGeral = DateUtils.diffYMDHMS(
                    dataPrimeiraLeituraGeral,
                    dataUltimaLeituraGeral
                );

                veiculo.totalizadorTempoVeiculo = {
                    tempo_total_dia_veiculos: diffLeituraGeral.days,
                    tempo_total_hora_veiculos: diffLeituraGeral.hours,
                    tempo_total_minuto_veiculos: diffLeituraGeral.minutes,
                };

            }));
    }

    static gerarDadosTotalizadoresTabela(poisVeiculosTotalizadores: PoisVeiculosTotalizador[], dataPoiTable: Poi[]): Poi[] {

        poisVeiculosTotalizadores.forEach((poiVeiculoTotalizador) => {
            if (!dataPoiTable.find((poi) => poi.id === poiVeiculoTotalizador.poi.id)) {
                dataPoiTable.push(poiVeiculoTotalizador.poi);
            }
        });

        return [...dataPoiTable];
    }

}