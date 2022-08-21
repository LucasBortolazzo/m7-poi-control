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
    center?: google.maps.LatLng | google.maps.LatLngLiteral | null;
    totalizadorTempoVeiculo?: TotalizadorTempo;
    poiDescri?: string;
}
