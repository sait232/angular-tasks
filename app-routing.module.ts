import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path:'about-us',loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path:'contact-us',loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule)},
  {path:'sign-in',loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule)},
  {path:'sign-up',loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule)},
  {path:'login',loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path:'update/:id',loadChildren: () => import('./modules/update/update.module').then(m => m.UpdateModule)},
  {path:'user-home',loadChildren: () => import('./modules/user-home/user-home.module').then(m => m.UserHomeModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
