import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from '../profile/profile.component';
import { RecommandationsComponent } from './recommandations/recommandations.component';

const routes: Routes = [{ path: '', component: AdminComponent,
children: [
  {path:'', pathMatch:'full', redirectTo:'dashboard'},
  {path:"dashboard",component:UsersComponent},
  {path:"profile",component:ProfileComponent},
  {path:"recommandation",component:RecommandationsComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
