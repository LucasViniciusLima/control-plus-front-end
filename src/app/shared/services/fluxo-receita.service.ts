import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FluxoReceita } from 'src/app/models/fluxo-receita.model';
import { Observable } from 'rxjs';
import { FluxoCaixa } from 'src/app/models/fluxo-caixa.model';

@Injectable({
  providedIn: 'root'
})
export class FluxoReceitaService {

  url: string = `http://localhost:3000/api/v1/fluxo-receita`;

  constructor(private http: HttpClient) { }

  async criarFluxoReceita(fluxoReceita: FluxoReceita) {
    await this.http.post(this.url, fluxoReceita).toPromise().then(response => console.log(response));
  }

  carregarFluxosReceitas(): Observable<FluxoCaixa[]> {
    return this.http.get<FluxoCaixa[]>(this.url);
  }

}
