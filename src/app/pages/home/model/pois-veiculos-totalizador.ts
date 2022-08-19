import { LeituraPosicao } from './leitura-posicao';
import { OverlayType } from './overlay-type';
import { Poi } from './poi';
import { TotalizadorTempo } from './totalizador-tempo';
import { VeiculoLeitura } from './veiculo-leitura';

export interface PoisVeiculosTotalizador {
    poi: Poi;
    veiculo: VeiculoLeitura;
    totalizadorTempoPoi: TotalizadorTempo;
    overlay: OverlayType;
    leituraPosicaoVeiculosPoi: LeituraPosicao[];
}
