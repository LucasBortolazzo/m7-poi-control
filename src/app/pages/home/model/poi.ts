import { TotalizadorTempo } from './totalizador-tempo';

export interface Poi {
    id: number;
    nome: string;
    raio: number;
    latitude: number;
    longitude: number;
    center?: { lat: number; lng: number };
    totalizador?: TotalizadorTempo;
}
