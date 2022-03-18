import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AdminClientComponent } from './admin-client/admin-client.component';
import { AdminEmailboxComponent } from './admin-emailbox/admin-emailbox.component';
import { AdminVehicleComponent } from './admin-vehicle/admin-vehicle.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MyAccountComponent } from './my-account/my-account.component';
import { EditAgencyComponent } from './edit-agency/edit-agency.component';
import { EditVechleComponent } from './edit-vechle/edit-vechle.component';

const routes: Routes = [ 
  {path: 'home' , component: AdminHomeComponent},
  {path: 'emailbox' , component: AdminEmailboxComponent},
  {path: 'edit/:id' , component: EditAgencyComponent},
  {path: 'editvec/:id' , component: EditVechleComponent},
  {path: 'vehicle' , component: AdminVehicleComponent},
  {path: 'client' , component: AdminClientComponent},
  {path: 'account' , component: MyAccountComponent},
  {path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path:"**", component:NotFoundComponent}
];


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminClientComponent,
    AdminEmailboxComponent,
    AdminVehicleComponent,
    AdminNavbarComponent,
    MyAccountComponent,
    EditAgencyComponent,
    EditVechleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
