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

}