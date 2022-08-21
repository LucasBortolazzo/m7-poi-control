import { LeituraPosicao } from './leitura-posicao';
import { OverlayType } from './overlay-type';
import { TotalizadorTempo } from './totalizador-tempo';

export interface VeiculoLeitura {
    placa: string;
    leiturasVeiculo?: LeituraPosicao[];
    totalizadorTempoVeiculo?: TotalizadorTempo;
    imageURL?: string;
    corMarcador?: string;
    overlay?: string[];
}
