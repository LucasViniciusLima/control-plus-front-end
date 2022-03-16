import { Component, OnInit } from '@angular/core';
import { FluxoCusto } from 'src/app/models/fluxo-custo.model';
import { FluxoCustoService } from 'src/app/shared/services/fluxo-custo.service';

@Component({
  selector: 'app-criar-fluxo-custo',
  templateUrl: './criar-fluxo-custo.component.html',
  styleUrls: ['./criar-fluxo-custo.component.css']
})
export class CriarFluxoCustoComponent implements OnInit {

  fluxoCusto: FluxoCusto;

  constructor(private readonly fluxoCustoService: FluxoCustoService) {
    this.fluxoCusto = new FluxoCusto('', 0, 0, new Date());
  }

  ngOnInit(): void {
  }

  cadastrarCusto() {
    this.fluxoCustoService
      .criarFluxoCusto(this.fluxoCusto)
      .subscribe(resp => {
        history.back();//FIXME
      });
  }

}
