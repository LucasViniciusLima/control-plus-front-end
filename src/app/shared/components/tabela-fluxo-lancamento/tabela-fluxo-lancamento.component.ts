import { Component, Input, OnInit } from '@angular/core';
import { FluxoCaixa } from 'src/app/models/fluxo-caixa.model';

@Component({
  selector: 'tabela-fluxo-lancamento',
  templateUrl: './tabela-fluxo-lancamento.component.html',
  styleUrls: ['./tabela-fluxo-lancamento.component.css']
})
export class TabelaFluxoLancamentoComponent implements OnInit {

  @Input() tipo: 'C' | 'R' = 'C';
  @Input() lancamentos: FluxoCaixa[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
