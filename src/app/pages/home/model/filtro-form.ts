import { Poi } from './poi';

export interface FilterForm {
    poi?: Poi;
    placa?: string;
    dataLeitura?: Date;
    exibirSomenteEntradaSaidaVeiculoInPoi: boolean;
}
