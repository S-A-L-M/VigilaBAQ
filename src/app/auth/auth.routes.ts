import { Routes } from '@angular/router';
import { SigninPage } from './signin/signin.page';
import { SignupPage } from './signup/signup.page';
import { ForgetPasswordPage } from './forget-password/forget-password.page';
import { WelcomePagePage } from './welcome-page/welcome-page.page';

export const routes: Routes = [
  {path: 'signin',component: SigninPage, title: 'SignIn'},
  {path: 'signup',component: SignupPage, title: 'SignUp'},
  {path: 'reset-password',component: ForgetPasswordPage, title: 'Reset Password'},
  {path: 'welcome-page',component: WelcomePagePage, title: 'Welcome'},
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },

];
