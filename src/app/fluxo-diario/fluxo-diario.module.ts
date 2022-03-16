import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeFluxoDiarioComponent } from './home-fluxo-diario/home-fluxo-diario.component';
import { FluxoDiarioRoutingModule } from './fluxo-diario-routing.module';
import { CriarFluxoCustoComponent } from './criar-fluxo-custo/criar-fluxo-custo.component';
import { CriarFluxoReceitaComponent } from './criar-fluxo-receita/criar-fluxo-receita.component';
import { HttpClientModule } from '@angular/common/http';
import { FluxoCustoService } from '../shared/services/fluxo-custo.service';
import { FluxoReceitaService } from '../shared/services/fluxo-receita.service';
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
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    FluxoCustoService,
    FluxoReceitaService
  ]
})
export class FluxoDiarioModule { }