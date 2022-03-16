import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FluxoCaixa } from 'src/app/models/fluxo-caixa.model';
import { FluxoCusto } from 'src/app/models/fluxo-custo.model';

@Injectable({
  providedIn: 'root'
})
export class FluxoCustoService {

  url: string = `http://localhost:3000/api/v1/fluxo-custo`;

  constructor(private http: HttpClient) { }

  criarFluxoCusto(fluxocusto: FluxoCusto) {
    return this.http.post(this.url, fluxocusto);
  }

  carregarFluxosCustos(): Observable<FluxoCaixa[]> {
    return this.http.get<FluxoCaixa[]>(this.url);
  }
}


