import { OverlayType } from './overlay-type';
import { TotalizadorTempo } from './totalizador-tempo';
import { VeiculoLeitura } from './veiculo-leitura';

export interface Poi {
    id: number;
    nome: string;
    raio: number;
    latitude: number;
    longitude: number;
    center?: google.maps.LatLng | google.maps.LatLngLiteral | null;
    veiculos?: VeiculoLeitura[];
    totalizadorPoi?: TotalizadorTempo;
    overlay?: string;
    icon?: string;
}
