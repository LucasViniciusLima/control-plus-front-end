import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FluxoCaixa } from 'src/app/models/fluxo-caixa.model';
import { FluxoCusto } from 'src/app/models/fluxo-custo.model';
import { FluxoReceita } from 'src/app/models/fluxo-receita.model';

@Injectable({
  providedIn: 'root'
})
export class FluxoCaixaService {

  url: string = `http://localhost:3000/api/v1/fluxo-caixa`;

  constructor(private http: HttpClient) { }

  criarFluxoCusto(fluxocusto: FluxoCusto) {
    return this.http.post(this.url, fluxocusto);
  }

  carregarFluxosCusto(): Observable<FluxoCaixa[]> {
    return this.http.get<FluxoCaixa[]>(this.url);
  }

  criarFluxoReceita(fluxoReceita: FluxoReceita) {
    return this.http.post(this.url, fluxoReceita);
  }

  carregarFluxosReceita(): Observable<FluxoCaixa[]> {
    return this.http.get<FluxoCaixa[]>(this.url);
  }//criar rota no back-end e adicionar aqui fluxo-caixa/receita e fluxo-caixa/custo
}


