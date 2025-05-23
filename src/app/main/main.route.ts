import { Routes } from '@angular/router';
import { SecurityPage } from './pages/security/security.page';
import { MainPage } from './main.page';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
      { path: 'security', component: SecurityPage }
    ]
  },
  // { path: '404', component: NotfoundPage },
  // { path: '**', redirectTo: '404' }
];