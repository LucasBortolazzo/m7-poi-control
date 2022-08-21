import { TotalizadorTempo } from './totalizador-tempo';

export interface LeituraPosicao {
    id: number;
    placa: string;
    data: Date;
    velocidade: number;
    latitude: number;
    longitude: number;
    ignicao: boolean;
    distanciaParaPoi?: number;
    inPoiRadius?: boolean;
    center?: { lat: number; lng: number; };

}
