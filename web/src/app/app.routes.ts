import { Routes } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { WelcomePageComponent } from './page/welcome-page/welcome-page.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

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
    }
];
