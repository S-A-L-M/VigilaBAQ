import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.route').then((m) => m.routes),
  },
  {
    path: 'notfound',
    loadComponent: () => import('./shared/notfound/notfound.page').then( m => m.NotfoundPage)
  },
  {
    path: 'button',
    loadComponent: () => import('./shared/button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'validators-form',
    loadComponent: () => import('./shared/validators-form/validators-form.page').then( m => m.ValidatorsFormPage)
  },
];
