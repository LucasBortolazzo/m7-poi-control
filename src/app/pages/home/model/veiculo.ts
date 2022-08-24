export interface Veiculo {
    placa: string,
    nome: string,
    modelo: string;
    cor: string,
    renavan: string,
    chassi: string,
    anoFabicacao: number,
    iconName: string;
}

export const dadosFicticiosVeiculos: Veiculo[] = [
    {
        placa: 'TESTE001',
        nome: 'Scania',
        modelo: 'P 310 8x2',
        cor: 'Branco',
        renavan: '5744060464-1',
        chassi: '6lA 6tzA5216',
        anoFabicacao: 2015,
        iconName: 'scania-64x64.png'
    },
    {
        placa: 'CAR0012',
        nome: 'Honda Civic',
        modelo: 'Civic',
        cor: 'Amarelo',
        renavan: '4676394060-5',
        chassi: '13S mZynZr',
        anoFabicacao: 2016,
        iconName: 'taxi-64x64.png'
    },
];