import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'auth'},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, 
  //signup, login, logout
  { path: 'home', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  //page du user
  { path: 'dashboard', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];
  //page de l'admin

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
