export class FluxoCusto {
    nome: string;
    preco: number;
    tipo: string;
    data: Date;

    constructor(nome: string, preco: number, data: Date) {
        this.nome = nome;
        this.preco = preco;
        this.tipo = 'C';
        this.data = data;
    }

}