import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth/guards/auth-guard.service";
import { HomeComponent } from "./home/home.component";


const APP_ROUTES: Routes = [
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },    
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuardService] },
    { path: 'fluxo-diario', loadChildren: () => import('./fluxo-diario/fluxo-diario.module').then(m => m.FluxoDiarioModule), canActivate: [AuthGuardService] },
    { path: '**', redirectTo: 'home' }
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
}) export class AppRoutingModule { }