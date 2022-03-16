import { Component, OnInit } from '@angular/core';
import { FluxoCaixa } from 'src/app/models/fluxo-caixa.model';
import { FluxoCustoService } from 'src/app/shared/services/fluxo-custo.service';
import { FluxoReceitaService } from 'src/app/shared/services/fluxo-receita.service';

@Component({
  selector: 'app-home-fluxo-diario',
  templateUrl: './home-fluxo-diario.component.html',
  styleUrls: ['./home-fluxo-diario.component.css']
})
export class HomeFluxoDiarioComponent implements OnInit {

  custos: FluxoCaixa[] = [];
  receitas: FluxoCaixa[] = [];

  constructor(
    private fluxoReceitaService: FluxoReceitaService,
    private fluxoCustoService: FluxoCustoService,
  ) { }

  ngOnInit(): void {
    this.fluxoReceitaService.carregarFluxosReceitas()
      .subscribe((receitas: FluxoCaixa[]) => this.receitas = receitas)

    this.fluxoCustoService.carregarFluxosCustos()
      .subscribe((custos: FluxoCaixa[]) => this.custos = custos)
  }

}
