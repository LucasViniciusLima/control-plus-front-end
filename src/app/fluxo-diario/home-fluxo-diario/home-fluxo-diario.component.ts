import { Component, OnInit } from '@angular/core';
import { FluxoCaixa } from 'src/app/models/fluxo-caixa.model';
import { FluxoCaixaService } from 'src/app/shared/services/fluxo-caixa.service';

@Component({
  selector: 'app-home-fluxo-diario',
  templateUrl: './home-fluxo-diario.component.html',
  styleUrls: ['./home-fluxo-diario.component.css']
})
export class HomeFluxoDiarioComponent implements OnInit {

  custos: FluxoCaixa[] = [];
  receitas: FluxoCaixa[] = [];

  constructor(
    private fluxoCaixaService: FluxoCaixaService,
  ) { }

  ngOnInit(): void {
    this.fluxoCaixaService.carregarFluxosReceita()
      .subscribe((receitas: any) => this.receitas = receitas?.listaReceita);

    this.fluxoCaixaService.carregarFluxosCusto()
      .subscribe((custos: any) => this.custos = custos?.listaCusto);
  }

}
