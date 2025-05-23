import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.routes),
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.route').then( m => m.routes)
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: 'not-found',
    loadComponent: () => import('./shared/not-found/not-found.page').then( m => m.NotFoundPage)
  },
];
