import { Routes } from '@angular/router';
import { SigninPage } from './signin/signin.page';
import { SignupPage } from './signup/signup.page';

export const routes: Routes = [
  {path: '',component: SigninPage},
  {path: 'signup',component: SignupPage},
];
