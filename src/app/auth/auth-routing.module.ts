import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./page/login/login.component";
import { RegisterComponent } from "./page/register/register.component";

const routes: Routes = [
    { path: 'cadastrar', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) export class AuthRoutingModule { }