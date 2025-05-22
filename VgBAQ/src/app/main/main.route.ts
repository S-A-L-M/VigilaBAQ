import { Routes } from '@angular/router';
import { SecurityPage } from './pages/security/security.page';
import { MainPage } from './main.page';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePage },
      { path: 'security', component: SecurityPage }
    ]
  },
  // { path: '404', component: NotfoundPage },
  // { path: '**', redirectTo: '404' }
];
