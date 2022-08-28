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

        const content =
            '<div class="container"> '
            + '    <div class="card"> '
            + '        <div class="title"> '
            + '            <div class="right"> '
            + '                <div class="info"> '
            + '                    <i class="fa-solid fa-location-dot"></i> '
            + '                    <h2>' + poi.id + ' - ' + poi.nome + '</h2> '
            + '                </div> '
            + '                <div class="info"> '
            + '                    <i class="fa-solid fa-location-crosshairs"></i> '
            + '                    <h3>Lat: ' + poi.latitude + '</h3> '
            + '                </div> '
            + '                <div class="info"> '
            + '                    <i class="fa-solid fa-location-arrow"></i> '
            + '                    <h3>Lng: ' + poi.longitude + '</h3> '
            + '                </div> '
            + '                <div class="info"> '
            + '                    <i class="fa-solid fa-circle-dot"></i> '
            + '                    <h3>Raio: ' + poiRaio.toString() + ' Metros</h3> '
            + '                </div> '
            + '            </div> '
            + '        </div> '
            + '        <div class="content"> '
            + '            <div class="info"> '
            + '                <i class="fa-solid fa-car-rear"></i> '
            + '                <h3>Total de veiculos distintos no POI: ' + poi.veiculos.length + '</h3> '
            + '            </div> '
            + '            <div class="info"> '
            + '                <i class="fa-solid fa-arrow-up-1-9"></i> '
            + '                <h3>Total de leituras de veiculos no POI: ' + totalLeiturasPoi + '</h3> '
            + '            </div> '
            + '            <div class="info"> '
            + '                <i class="fa-solid fa-user-clock"></i> '
            + '                <h3>Tempo total dos veículos no POI: ' + tempoTotalVeiculoStr + '</h3> '
            + '            </div> '
            + '        </div> '
            + '    </div> '
            + '</div>';

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
            velocidade: leituraPosicao.velocidade + 'KM/H' || 0,
            data: leituraPosicao.data ? formatDate(leituraPosicao.data, 'dd/MM/yyyy HH:mm:ss', 'pt-BR', '+00:00') : 'N/A',
            distanciaParaPoi: leituraPosicao.distanciaParaPoi ? (Math.round(leituraPosicao.distanciaParaPoi * 100) / 100).toFixed(1) + ' Metros' : '-',
            inPoiRadius: leituraPosicao.inPoiRadius ? 'Sim' : 'Nao',
            poiDescri: leituraPosicao.poiDescri || '-',
            veiculoContinuaNoPoi: veiculoLeitura.continuaNoPoi ? 'Sim' : 'Não',
            motorista: dadosVeiculo.motorista.toUpperCase(),
            URLFotoMotorista: '../../assets/img/' + dadosVeiculo.iconMotorista
        };

        const content =
            '<div class="container"> '
            + '    <div class="card"> '
            + '        <div class="title"> '
            + '            <div class="left"> '
            + '                <img src="' + dadosExibicao.URLFotoMotorista + '" alt="Foto do motorista do veículo" /> '
            + '            </div> '
            + '            <div class="right"> '
            + '                <div class="info"> '
            + '                    <i class="fa-solid fa-circle-user"></i> '
            + '                    <h2>' + dadosExibicao.motorista + '</h2> '
            + '                </div> '
            + '                <div class="info"> '
            + '                    <i class="fa-solid fa-car"></i> '
            + '                    <h3>' + dadosExibicao.nome + ' - ' + dadosExibicao.placa + '</h3> '
            + '                </div> '
            + '                <div class="info"> '
            + '                    <i class="fa-solid fa-calendar-day"></i> '
            + '                    <h3>' + dadosExibicao.data + ' | ID:' + dadosExibicao.idLeitura + ' | ' + dadosExibicao.velocidade + '</h3> '
            + '                </div> '
            + '            </div> '
            + '        </div> '
            + '        <div class="content"> '
            + '            <div class="info"> '
            + '                <i class="fa-solid fa-map-location-dot"></i> '
            + '                <h3>Lat: ' + dadosExibicao.latitude + ' | Lng: ' + dadosExibicao.longitude + '</h3> '
            + '            </div> '
            + '            <div class="info"> '
            + '                <i class="fa-solid fa-people-arrows"></i> '
            + '                <h3>Distância para POI: ' + dadosExibicao.distanciaParaPoi + '</h3> '
            + '            </div> '
            + '            <div class="info"> '
            + '                <i class="fa-solid fa-user-clock"></i> '
            + '                <h3>Tempo total no raio do POI: ' + dadosExibicao.tempoTotalVeiculoInPoi + '</h3> '
            + '            </div> '
            + '        </div> '
            + '    </div> '
            + '</div>';

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
        const totalMinutosStr = totalizadorTempoVeiculo.tempo_total_minuto_veiculos > 0 ? totalizadorTempoVeiculo.tempo_total_minuto_veiculos + ' minuto(s)' : '';

        return `${totalDiasStr} ${totalDiasStr && (totalHorasStr || totalMinutosStr) ? ' e ' : ''}
                ${totalHorasStr} ${totalHorasStr && totalMinutosStr ? ' e ' : ''}
                ${totalMinutosStr}`;
    }
}