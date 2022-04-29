import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeFluxoDiarioComponent } from './home-fluxo-diario/home-fluxo-diario.component';
import { FluxoDiarioRoutingModule } from './fluxo-diario-routing.module';
import { CriarFluxoCustoComponent } from './criar-fluxo-custo/criar-fluxo-custo.component';
import { CriarFluxoReceitaComponent } from './criar-fluxo-receita/criar-fluxo-receita.component';
import { FluxoCaixaService } from '../shared/services/fluxo-caixa.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeFluxoDiarioComponent,
    CriarFluxoCustoComponent,
    CriarFluxoReceitaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FluxoDiarioRoutingModule,
    SharedModule,
  ],
  providers: [
    FluxoCaixaService
  ]
})
export class FluxoDiarioModule { }
