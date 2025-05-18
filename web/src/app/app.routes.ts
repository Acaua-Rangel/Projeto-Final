import { Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { WelcomePageComponent } from './page/welcome-page/welcome-page.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LancamentoComponent } from './page/lancamento-page/lancamento-page.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Ford - Home',
        component: WelcomePageComponent
    },
    {
        path: 'login',
        title: 'Ford - Login',
        component: LoginPageComponent
    },
    {
        path: 'dashboard',
        title: 'Ford - Painel de Controle',
        component: DashboardComponent
    },
    {
        path: 'lancamento-page',
        title: 'Ford - lancamento-page',
        component: LancamentoComponent
    }
];
