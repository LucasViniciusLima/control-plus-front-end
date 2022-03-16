export class FluxoCusto {
    nome: string;
    preco: number;
    tipo: number;
    data: Date;

    constructor(nome: string, preco: number, tipo: number, data: Date) {
        this.nome = nome;
        this.preco = preco;
        this.tipo = tipo;
        this.data = data;
    }

}