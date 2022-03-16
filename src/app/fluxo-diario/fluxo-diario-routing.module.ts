import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CriarFluxoCustoComponent } from "./criar-fluxo-custo/criar-fluxo-custo.component";
import { CriarFluxoReceitaComponent } from "./criar-fluxo-receita/criar-fluxo-receita.component";
import { HomeFluxoDiarioComponent } from "./home-fluxo-diario/home-fluxo-diario.component";

const routes: Routes = [
    { path: '', component: HomeFluxoDiarioComponent },
    { path: 'criar-custo', component: CriarFluxoCustoComponent },
    { path: 'criar-receita', component: CriarFluxoReceitaComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) export class FluxoDiarioRoutingModule { }