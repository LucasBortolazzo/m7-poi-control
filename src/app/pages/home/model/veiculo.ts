export interface Veiculo {
    placa: string,
    nome: string,
    cor: string,
    renavan: string,
    chassi: string,
    anoFabicacao: number,
    modelo: string;
    imageURL: string;
}

export const dadosFicticiosVeiculos: Veiculo[] = [
    {
        placa: 'TESTE001',
        nome: 'GOL',
        cor: 'blue',
        renavan: '34324235345',
        chassi: '423432525',
        anoFabicacao: 2022,
        modelo: 'Modelo teste',
        imageURL: ''
    },
    {
        placa: 'CAR0012',
        nome: 'FUSION',
        cor: 'blue',
        renavan: '54645647',
        chassi: '567567567',
        anoFabicacao: 2022,
        modelo: 'Modelo teste 2',
        imageURL: ''
    },
];