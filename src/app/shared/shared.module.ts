import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabelaFluxoLancamentoComponent } from './components/tabela-fluxo-lancamento/tabela-fluxo-lancamento.component';

const COMPONENTS = [
  TabelaFluxoLancamentoComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    CommonModule,
    FormsModule,
    ...COMPONENTS
  ],
  providers: [],
})
export class SharedModule { }
