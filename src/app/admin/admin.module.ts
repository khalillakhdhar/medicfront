import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { RecommandationsComponent } from './recommandations/recommandations.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    RecommandationsComponent,
    AdminmenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
