import { formatDate } from '@angular/common';

import { LeituraPosicao } from '../pages/home/model/leitura-posicao';
import { Poi } from '../pages/home/model/poi';
import { TotalizadorTempo } from '../pages/home/model/totalizador-tempo';
import { Veiculo } from '../pages/home/model/veiculo';
import { VeiculoLeitura } from '../pages/home/model/veiculo-leitura';

export default class TemplateUtils {

    static getPoiInfoWindowTemplate(poi: Poi): string {
        const poiRaio = (Math.round(poi.raio * 100) / 100).toFixed(2);
        let totalLeiturasPoi = 0;

        poi.veiculos.map((poiVeiculo) => poiVeiculo)
            .map((veiculoLeitura) => {
                totalLeiturasPoi += veiculoLeitura.leiturasVeiculo.length;
            });

        const tempoTotalVeiculoStr = this.getTempoTotalFormat(poi.totalizadorPoi);

        const content = '<div class="content" style="box-shadow: 0px 1px 17px 0px #aaa;max-width: 32rem">' + //inline style because infoWindow does not apply the styles defined in the class/ID. Possible bug in infoWindow??
            '<div id="#poiContent" style="display: flex;flex-direction: column;"> ' +
            '<p class="poi-title" style="text-align: center;font-size: 1.5rem;font-weight: bold;color: #3f51b5;"> ' + poi.id + ' - ' + poi.nome + ' </p>' +
            '<p class="poi-subtitle" style="font-style: italic;"> Lat: ' + poi.latitude + ', Lng: ' + poi.longitude + ', Raio: ' + poiRaio.toString() + ' Metros </p>' +
            '<p class="poi-totalizador"> Tempo total de veiculos no POI: <span style="font-size: 1.4rem;font-weight: bold;">' + tempoTotalVeiculoStr + '</span></p > ' +
            '<p class="poi-totalizador" > Total de veiculos distintos no POI: <span style="font-size: 1.4rem;font-weight: bold;"> ' + poi.veiculos.length + ' </span></p> ' +
            '<p class="poi-totalizador" > Total de leituras de veiculos no POI: <span style="font-size: 1.4rem;font-weight: bold;"> ' + totalLeiturasPoi + ' </span></p> ' +
            '</div>' +
            '</div>';

        return content;
    }

    static getVeiculoLeituraWindowTemplate(leituraPosicao: LeituraPosicao, dadosVeiculo: Veiculo, veiculoLeitura: VeiculoLeitura): string {


        const dadosExibicao = {
            nome: dadosVeiculo.nome,
            placa: dadosVeiculo.placa,
            chassi: dadosVeiculo.chassi,
            renavan: dadosVeiculo.renavan,
            modelo: dadosVeiculo.modelo,
            cor: dadosVeiculo.cor,
            anoFabicacao: dadosVeiculo.anoFabicacao,
            tempoTotalVeiculoInPoi: this.getTempoTotalFormat(veiculoLeitura.totalizadorTempoVeiculo),
            idLeitura: leituraPosicao.id,
            emMovimento: leituraPosicao.ignicao ? 'Sim' : 'Nao',
            latitude: leituraPosicao.latitude,
            longitude: leituraPosicao.longitude,
            velocidade: leituraPosicao.velocidade || 0,
            data: leituraPosicao.data ? formatDate(leituraPosicao.data, 'dd/MM/yyyy HH:mm:ss', 'pt-BR', '+00:00') : 'N/A',
            distanciaParaPoi: leituraPosicao.distanciaParaPoi ? (Math.round(leituraPosicao.distanciaParaPoi * 100) / 100).toFixed(1) + 'M' : 'N/A',
            inPoiRadius: leituraPosicao.inPoiRadius ? 'Sim' : 'Nao',
            leituraPosicao: leituraPosicao.inPoiRadius,
            poiDescri: leituraPosicao.poiDescri || 'N/A',
            veiculoContinuaNoPoi: veiculoLeitura.continuaNoPoi ? 'Sim' : 'Não'
        };

        const content = '<div class="content" style="box-shadow: 0px 1px 17px 0px #aaa;z-index: 99999;max-width: 27rem">' + //inline style because infoWindow does not apply the styles defined in the class/ID. Possible bug in infoWindow??
            '<div id="#poiContent" style="display: flex;flex-direction: column;"> ' +
            '<p class="poi-title" style="text-align: center;font-size: 1.5rem;font-weight: bold;color: #3f51b5;"> ' + dadosExibicao.nome + ' - ' + dadosExibicao.placa + ' - ' + dadosExibicao.data + ' | ID:' + dadosExibicao.idLeitura + ' </p>' +
            '<p class="poi-subtitle" style=""> Chassi: ' + dadosExibicao.chassi + ', Renavan: ' + dadosExibicao.renavan + '</p>' +
            '<p class="poi-subtitle" style="font-style: italic;"> Lat: ' + dadosExibicao.latitude + ', Lng: ' + dadosExibicao.longitude + ', Velocidade: ' + dadosExibicao.velocidade + ' KM/H <span>, Mov: ' + dadosExibicao.emMovimento + '</span> </p>' +
            '<p>Tempo <strong><i>Total</i></strong> do veículo no POI: <span style="font-size: 1.4rem;font-weight: bold;">' + dadosExibicao.tempoTotalVeiculoInPoi + '</span> </p>' +
            '<p class="poi-totalizador">Distância para POI: <span style="font-size: 1.4rem;font-weight: bold;"> ' + dadosExibicao.distanciaParaPoi + '</span>, <span> Leitura no raio do POI: '
            + dadosExibicao.inPoiRadius + ', Continua no POI: ' + dadosExibicao.veiculoContinuaNoPoi + '</span> </p> ' +
            '<p class="poi-totalizador" style="font-size: 1.2rem;font-style: italic"> POI Referência: <span style="font-size: 1.2rem;font-style: italic;"> ' + dadosExibicao.poiDescri + ' </span></p> ' +
            '</div>' +
            '</div>';

        return content;
    }

    static getTempoTotalFormat(totalizadorTempoVeiculo: TotalizadorTempo): string {
        if ((!totalizadorTempoVeiculo) ||
            (!totalizadorTempoVeiculo.tempo_total_dia_veiculos && !totalizadorTempoVeiculo.tempo_total_hora_veiculos &&
                !totalizadorTempoVeiculo.tempo_total_minuto_veiculos)) {
            return '-';
        }

        const totalDiasStr = totalizadorTempoVeiculo.tempo_total_dia_veiculos > 0 ? totalizadorTempoVeiculo.tempo_total_dia_veiculos + ' dia(s)' : '';
        const totalHorasStr = totalizadorTempoVeiculo.tempo_total_hora_veiculos > 0 ? totalizadorTempoVeiculo.tempo_total_hora_veiculos + ' hora(s)' : '';
        const totalMinutosStr = totalizadorTempoVeiculo.tempo_total_minuto_veiculos > 0 ? totalizadorTempoVeiculo.tempo_total_minuto_veiculos + 'minuto(s)' : '';

        return `${totalDiasStr} ${totalDiasStr && (totalHorasStr || totalMinutosStr) ? ' e ' : ''}
                ${totalHorasStr} ${totalHorasStr && totalMinutosStr ? ' e ' : ''}
                ${totalMinutosStr}`;
    }
}