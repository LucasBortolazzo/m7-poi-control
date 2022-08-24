import { LeituraPosicao } from './leitura-posicao';
import { OverlayType } from './overlay-type';
import { TotalizadorTempo } from './totalizador-tempo';
import { Veiculo } from './veiculo';

export interface VeiculoLeitura {
    placa: string;
    leiturasVeiculo?: LeituraPosicao[];
    totalizadorTempoVeiculo?: TotalizadorTempo;
    continuaNoPoi?: boolean;
    dadosFicticiosVeiculo: Veiculo;
    overlay: string;
}
