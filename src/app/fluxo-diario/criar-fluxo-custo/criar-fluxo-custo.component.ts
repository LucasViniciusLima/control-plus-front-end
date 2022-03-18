import { Component, OnInit } from '@angular/core';
import { FluxoCusto } from 'src/app/models/fluxo-custo.model';
import { FluxoCaixaService } from 'src/app/shared/services/fluxo-caixa.service';

@Component({
  selector: 'app-criar-fluxo-custo',
  templateUrl: './criar-fluxo-custo.component.html',
  styleUrls: ['./criar-fluxo-custo.component.css']
})
export class CriarFluxoCustoComponent implements OnInit {

  fluxoCusto: FluxoCusto;

  constructor(private readonly fluxoCaixaService: FluxoCaixaService) {
    this.fluxoCusto = new FluxoCusto('', 0, new Date());
  }

  ngOnInit(): void {
  }

  cadastrarCusto() {
    this.fluxoCaixaService
      .criarFluxoCusto(this.fluxoCusto)
      .subscribe(resp => {
        history.back();//FIXME
      });
  }

}
