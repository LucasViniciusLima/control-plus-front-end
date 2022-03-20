import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FluxoCaixaService } from '../shared/services/fluxo-caixa.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    HttpClientModule
  ],
  declarations: [HomeDashboardComponent],
  providers: [FluxoCaixaService]
})
export class DashboardModule { }
