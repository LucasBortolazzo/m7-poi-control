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
    totalizador?: TotalizadorTempo;
}
