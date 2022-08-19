import { LeituraPosicao } from './leitura-posicao';
import { OverlayType } from './overlay-type';
import { TotalizadorTempo } from './totalizador-tempo';

export interface VeiculoLeitura {
    id: number;
    placa: string;
    leiturasVeiculo: LeituraPosicao[];
    totalizadorTempoVeiculo: TotalizadorTempo;
    overlay: OverlayType;
}
