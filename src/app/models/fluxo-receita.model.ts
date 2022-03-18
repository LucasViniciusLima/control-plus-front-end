export class FluxoReceita {
    nome: string;
    data: Date;
    preco: number;
    tipo: string

    constructor(nome: string, preco: number, data: Date) {
        this.nome = nome;
        this.preco = preco;
        this.data = data; 
        this.tipo = 'R';
    }
    
}