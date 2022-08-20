import { OverlayType } from './overlay-type';
import { TotalizadorTempo } from './totalizador-tempo';
import { VeiculoLeitura } from './veiculo-leitura';

export interface Poi {
    id: number;
    nome: string;
    raio: number;
    latitude: number;
    longitude: number;
    center?: { lat: number; lng: number };
    veiculos?: VeiculoLeitura[];
    totalizadorPoi?: TotalizadorTempo;
    overlay?: OverlayType;
}
