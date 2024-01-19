import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MaladieComponent } from './maladie/maladie.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { RappelComponent } from './rappel/rappel.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UsermenuComponent } from './usermenu/usermenu.component';


@NgModule({
  declarations: [
    UserComponent,
    MaladieComponent,
    MedicamentComponent,
    RappelComponent,
    AccueilComponent,
    UsermenuComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
