import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MaladieComponent } from './maladie/maladie.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { RappelComponent } from './rappel/rappel.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [{ path: '', component: UserComponent,
children: [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:"home",component:AccueilComponent},
  {path:"maladie",component:MaladieComponent},
  {path:"medicaments",component:MedicamentComponent},
  {path:"rappel",component:RappelComponent},
  {path:"profile",component:ProfileComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
