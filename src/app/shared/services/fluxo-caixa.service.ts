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

  criarFluxoReceita(fluxoReceita: FluxoReceita) {
    return this.http.post(this.url, fluxoReceita);
  }

  carregarFluxosCusto(): Observable<any> {
    return this.http.get<any>(this.url + `/custos`);
  }

  carregarFluxosReceita(): Observable<any> {
    return this.http.get<any>(this.url + `/receitas`);
  }
  
}


