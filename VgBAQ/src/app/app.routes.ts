import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.route').then((m) => m.routes),
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.route').then( m => m.routes)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
