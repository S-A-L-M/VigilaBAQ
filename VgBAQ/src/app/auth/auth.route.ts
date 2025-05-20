import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { NotfoundPage } from '../shared/notfound/notfound.page';

export const routes: Routes = [
  {path: 'login',component: LoginPage},
  {path: 'signup',component: SignupPage},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '404', component: NotfoundPage},
  {path: '**', redirectTo: '/404'}
];
