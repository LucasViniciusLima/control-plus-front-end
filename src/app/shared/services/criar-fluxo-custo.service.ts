import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FluxoCusto } from 'src/app/models/fluxo-custo.model';

@Injectable({
  providedIn: 'root'
})
export class FluxoCustoService {

  constructor() { }

  async criarFluxoCusto(fluxocusto: FluxoCusto) {

  }

  async carregarFluxosCustos(): Promise<Array<FluxoCusto>> {
    return;
  }
}


