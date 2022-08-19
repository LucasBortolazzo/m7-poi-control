import { TotalizadorTempo } from './totalizador-tempo';

export interface LeituraPosicao {
    id: number;
    placa: string;
    data: Date;
    velocidade: number;
    latitude: number;
    longitude: number;
    ignicao: number;
    imageURL?: string;
    center?: { lat: number; lng: number };
    totalizadoresVeiculo: TotalizadorTempo;
}
