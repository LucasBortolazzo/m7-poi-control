import { formatDate } from '@angular/common';

import * as moment from 'moment';

import { DateUtils } from 'src/app/shared/date-utils';
import { LeituraPosicao } from './model/leitura-posicao';
import { Poi } from './model/poi';
import { PoisVeiculosTotalizador } from './model/pois-veiculos-totalizador';
import { dadosFicticiosVeiculos, Veiculo } from './model/veiculo';
import { VeiculoLeitura } from './model/veiculo-leitura';

export default class calculoPoiUtils {

    private static dadosVeiculo: Veiculo[] = dadosFicticiosVeiculos;

    /**
     * @author Lucas
     * @description Método responsável por processar as leituras de posição presentes no raio do POI, caso o POI não tiver sido processado nenhuma vez
     * Por regra, este método vai iterar em todas as leituras passadas por parâmetro e antes de calcular a posição validará se é
     * realmente necessário fazê-lo, por questão de performance, visto que após a distância entre o POI e a posição ser calculada uma vez,
     * ela será sempre a mesma, por este motivo este método calcula e armazena temporariamente os dados calculados em sua memória de cálculo.
     * @param leiturasPosicao Lista de leituras de posição que deverá ser processada
     * @param pois Lista de pontos de interesse que deverá ser processada
     * @param totalizadoresProcessados Lista com os totalizadores já processados até o momento
     *
     */
    static processarPoisLeiturasVeiculos(leiturasPosicao: LeituraPosicao[], pois: Poi[],
        totalizadoresProcessados: PoisVeiculosTotalizador[], poiFilter?: Poi,) {
        const poisVeiculosTotalizadores: PoisVeiculosTotalizador[] = [];

        if (poiFilter && totalizadoresProcessados
            .find((pt) => pt.poi.id === poiFilter.id)) {
            return poisVeiculosTotalizadores;
        }

        for (let leitura of leiturasPosicao) {

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
                const newLeituraPosicao = Object.assign({}, leitura);

                const veiculosLeiturasPois: LeituraPosicao[] = totalizadoresProcessados
                    .map((v) => v.poi.veiculos
                        .map((veiculo) => veiculo.leiturasVeiculo
                            .map((leituraPoi) => leituraPoi)))
                    .flat(3);

                if (poiFilter && poi.id !== poiFilter.id) {
                    return;
                }

                newLeituraPosicao.distanciaParaPoi =
                    google.maps.geometry.spherical.computeDistanceBetween(
                        { lat: poi.latitude, lng: poi.longitude },
                        { lat: newLeituraPosicao.latitude, lng: newLeituraPosicao.longitude }
                    );

                newLeituraPosicao.inPoiRadius = newLeituraPosicao.distanciaParaPoi <= poi.raio;
                newLeituraPosicao.poiDescri = `${poi.nome}`;
                newLeituraPosicao.center = { lat: newLeituraPosicao.latitude, lng: newLeituraPosicao.longitude };

                let leiturasVeiculoInPoi = poisVeiculosTotalizadores.map((a) => a.poi).map((b) => {

                    return b.veiculos.filter((v) => {

                        if (v.placa === newLeituraPosicao.placa && poi.id === b.id) {
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

                if (newLeituraPosicao.inPoiRadius) {
                    leiturasVeiculoInPoi.push(newLeituraPosicao);
                }

                leiturasVeiculoInPoi = [...leiturasVeiculoInPoi];

                const veiculoLeitura: VeiculoLeitura = {
                    placa: newLeituraPosicao.placa,
                    leiturasVeiculo: leiturasVeiculoInPoi,
                    totalizadorTempoVeiculo: null,
                    overlay: 'infoWindow',
                    dadosFicticiosVeiculo: this.dadosVeiculo
                        .find((dadosVeiculo) => dadosVeiculo.placa.toUpperCase() === newLeituraPosicao.placa) || null
                };

                if (!poi.veiculos.find((v, index) => {
                    if (v.placa === newLeituraPosicao.placa) {
                        poi.veiculos[index] = veiculoLeitura;
                        return true;
                    }

                    return false;
                }
                ) && newLeituraPosicao.inPoiRadius) {
                    poi.veiculos.push(Object.assign({}, veiculoLeitura));
                }

                poisVeiculosTotalizadores.push({ poi: poi });
            });
        };

        return poisVeiculosTotalizadores;
    }

    /**
     * @author Lucas
     * @description Método responsável por processar e calcular o tempo total de cada veículo que está ou passou pelo raio do POI.
     * Por regra, para saber se o veículo está ou passou pelo raio do POI, esse método calcula a diferença de tempo entre a
     * data da última leitura encontrada para o veículo no raio POI e a data da primeira leitura encontrada para o veículo no raio do POI,
     * ou seja: A diferença de tempo a partir do momento que o veículo entrou no raio do POI até o momento que o veículo saiu do raio POI.
     * Existe também uma regra adicional, que valida se o veículo continua no raio do POI, sendo: Se a data inicial e final das leituras de  
     * posição forem exatamente as mesmas(data, munutos e segundos), então considera-se que o veículo teve uma leitura de entrada
     * processada no POI, mas não teve uma leitura de posição de saída processada, ou seja: O veículo está no raio do POI e permanece nele desde a
     * leitura de posição inicial até a data de hoje.
     * @param totalizadoresProcessados Lista com os totalizadores já processados até o momento
     *
     */
    static calcularTempoVeiculosInPoi(
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[]
    ) {
        poisVeiculosTotalizadores.map((poiVeiculoTotalizador) =>
            poiVeiculoTotalizador.poi.veiculos.map((veiculo) => {
                const dataInicialLeituraOriginal = new Date(veiculo.leiturasVeiculo[0].data);
                const dataInicialLeituraSemTimeZone = new Date(dataInicialLeituraOriginal.toISOString().slice(0, -1));

                const dataFinaleituraOriginal = new Date(veiculo.leiturasVeiculo[veiculo.leiturasVeiculo.length - 1].data);
                const dataFinaleituraSemTimeZone = new Date(dataFinaleituraOriginal.toISOString().slice(0, -1));

                const dataPrimeiraLeituraGeral = moment(dataInicialLeituraSemTimeZone, 'dd/MM/yyyy HH:mm:ss');
                let dataUltimaLeituraGeral = moment(dataFinaleituraSemTimeZone, 'dd/MM/yyyy HH:mm:ss');

                if (dataPrimeiraLeituraGeral.valueOf() === dataUltimaLeituraGeral.valueOf()) {
                    dataUltimaLeituraGeral = moment(new Date(), 'dd/MM/yyyy HH:mm:ss');
                    veiculo.continuaNoPoi = true;
                }

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

    /**
     * @author Lucas
     * @description Método responsável por processar e calcular o tempo total de todos os veículos que estão no raio do POI.
     * Por regra, este método vai iterar em cada totalizador presente de cada veículo encontrado no raio do POI
     * e incrementará o tempo encontrado
     * @param totalizadoresProcessados Lista com os totalizadores já processados até o momento
     * @param leiturasPosicao Lista de leituras de posição que deverá ser processada
     *
     */
    static calcularTempoTotalVeiculosInPoi(
        poisVeiculosTotalizadores: PoisVeiculosTotalizador[]
    ) {

        poisVeiculosTotalizadores.map(poiVeiculoTotalizador => {
            const dataInicialTotalizadores = moment().set({ "hour": 0, "minute": 0, "second": 0 });
            const dataTotalizadoresSomaTempoTotal = dataInicialTotalizadores.clone();

            poiVeiculoTotalizador.poi.veiculos.forEach(veiculo => {
                dataTotalizadoresSomaTempoTotal.add(veiculo.totalizadorTempoVeiculo.tempo_total_dia_veiculos, 'day');
                dataTotalizadoresSomaTempoTotal.add(veiculo.totalizadorTempoVeiculo.tempo_total_hora_veiculos, 'hour');
                dataTotalizadoresSomaTempoTotal.add(veiculo.totalizadorTempoVeiculo.tempo_total_minuto_veiculos, 'minutes');
            });

            const diffLeituraGeral = DateUtils.diffYMDHMS(
                dataInicialTotalizadores,
                dataTotalizadoresSomaTempoTotal
            );

            poiVeiculoTotalizador.poi.totalizadorPoi = {
                tempo_total_dia_veiculos: diffLeituraGeral.days,
                tempo_total_hora_veiculos: diffLeituraGeral.hours,
                tempo_total_minuto_veiculos: diffLeituraGeral.minutes,
            };
        });
    }

    /**
     * @author Lucas
     * @description Método responsável por gerar as leituras de posição dos veículos(placas) que foram processadas no raio POI,
     * mas que não estão dentro do raio do POI, ou seja: Leituras fora do raio POI de veículos que estão no raio do POI
     * @param totalizadoresProcessados Lista com os totalizadores já processados até o momento
     * @param leiturasPosicao Lista de leituras de posição que deverá ser processada
     *
     */
    static gerarLeiturasPosicaoVeiculosOutPoi(poisVeiculosTotalizador: PoisVeiculosTotalizador[],
        leiturasPosicao: LeituraPosicao[],
        dataFiltro: Date) {
        const leiturasPosicaoveiculosOutPoi: VeiculoLeitura[] = [];

        const veiculosLeiturasPois: LeituraPosicao[] = poisVeiculosTotalizador.map((v) => v.poi.veiculos
            .map((veiculo) => veiculo.leiturasVeiculo.map((l) => l)))
            .flat(3);

        for (const leituraPosicao of leiturasPosicao) {
            const newLeituraPosicao = JSON.parse(JSON.stringify(leituraPosicao));

            newLeituraPosicao.inPoiRadius = false;
            newLeituraPosicao.distanciaParaPoi = null;
            newLeituraPosicao.center = { lat: newLeituraPosicao.latitude, lng: newLeituraPosicao.longitude };
            let leituraProcessadaInPoi = false;
            let placaProcessadaInPoi = false;
            let veiculoOutPoi = false;
            let dataLeituraEhValida = true;

            veiculosLeiturasPois.find((veiculoLeitura) => {
                placaProcessadaInPoi = veiculoLeitura.placa.toUpperCase() === newLeituraPosicao.placa.toUpperCase();
                leituraProcessadaInPoi = placaProcessadaInPoi &&
                    veiculoLeitura.id === newLeituraPosicao.id &&
                    veiculoLeitura.latitude === newLeituraPosicao.latitude &&
                    veiculoLeitura.longitude === newLeituraPosicao.longitude;

                return leituraProcessadaInPoi;
            }) || false;

            if (dataFiltro) {
                const dataLeitura = formatDate(newLeituraPosicao.data, 'dd/MM/yyyy', 'pt-BR', '+00:00');
                dataLeituraEhValida = dataLeitura === dataFiltro.toString();
            }

            if (!leituraProcessadaInPoi && placaProcessadaInPoi && dataLeituraEhValida) {

                const dadosVeiculoOutPoi: VeiculoLeitura = {
                    placa: newLeituraPosicao.placa.toUpperCase(),
                    leiturasVeiculo: [newLeituraPosicao],
                    totalizadorTempoVeiculo: null,
                    dadosFicticiosVeiculo: this.dadosVeiculo
                        .find((dadosVeiculo) => dadosVeiculo.placa.toUpperCase() === newLeituraPosicao.placa.toUpperCase()) || null,
                    overlay: 'infoWindow',
                };

                leiturasPosicaoveiculosOutPoi.find((veiculoLeitura: VeiculoLeitura, index) => {
                    veiculoOutPoi = veiculoLeitura.placa.toUpperCase() === newLeituraPosicao.placa.toUpperCase();
                    if (veiculoOutPoi) {
                        leiturasPosicaoveiculosOutPoi[index].leiturasVeiculo.push(newLeituraPosicao);
                    }
                    return veiculoOutPoi;
                });

                !veiculoOutPoi ? leiturasPosicaoveiculosOutPoi.push(dadosVeiculoOutPoi) : null;
            }
        };

        return leiturasPosicaoveiculosOutPoi;
    }

    /**
     * @author Lucas
     * @description Método responsável por gerar os dados totalizadores que serão exibidos em tela através de uma tabela
     * Por padrão este método vai adicionando os POIs conforme eles forem sendo calculados(e não apenas o último), ou seja:
     * Para cada POI calculado, esse método vai adicionar seus totalizadores para exibí-los em tela
     * @param totalizadoresProcessados Lista com os totalizadores já processados até o momento
     * @param dataPoiTable Dados da tabela processados até o momento
     *
     */
    static gerarDadosTotalizadoresTabela(poisVeiculosTotalizadores: PoisVeiculosTotalizador[], dataPoiTable: Poi[]): Poi[] {

        poisVeiculosTotalizadores.forEach((poiVeiculoTotalizador) => {
            if (!dataPoiTable.find((poi) => poi.id === poiVeiculoTotalizador.poi.id)) {
                dataPoiTable.push(poiVeiculoTotalizador.poi);
            }
        });

        return [...dataPoiTable];
    }

}
