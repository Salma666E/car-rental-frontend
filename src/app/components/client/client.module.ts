import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NavbarClientComponent } from './navbar-client/navbar-client.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [ 
  {path: 'home' , component: HomeComponent},
  {path: 'regist' , component: RegistrationComponent},
  // {path: 'invoice/:id' , component: DetailsInvoiceComponent},
  {path: 'account' , component: AccountComponent},
  {path: 'vehicles' , component: VehicleComponent},
  {path: 'contact' , component: ContactComponent},
  {path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    VehicleComponent,
    RegistrationComponent,
    ContactComponent,
    NavbarClientComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
