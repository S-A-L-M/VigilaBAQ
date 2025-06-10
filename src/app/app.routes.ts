import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.routes),
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.route').then( m => m.routes)
  },
];
