import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgencyNavbarComponent } from './agency-navbar/agency-navbar.component';
import { AgencyAccountComponent } from './agency-account/agency-account.component';
import { AgencyEmailboxComponent } from './agency-emailbox/agency-emailbox.component';
import { AgencyInvoiceComponent } from './agency-invoice/agency-invoice.component';
import { DetailsInvoiceComponent } from './details-invoice/details-invoice.component';
import { AgencyRateComponent } from './agency-rate/agency-rate.component';
import { AgencyDealComponent } from './agency-deal/agency-deal.component';
import { AgencyNewrentalComponent } from './agency-newrental/agency-newrental.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { AddManagerComponent } from './add-manager/add-manager.component';

const routes: Routes = [ 
  {path: 'home' , component: HomeComponent},
  {path: 'emailbox' , component: AgencyEmailboxComponent},
  {path: 'invoice/:id' , component: DetailsInvoiceComponent},
  {path: 'deals' , component: AgencyDealComponent},
  {path: 'rates' , component: AgencyRateComponent},
  {path: 'newreserv/:id' , component: AgencyNewrentalComponent},
  {path: 'invoice' , component: AgencyInvoiceComponent},
  {path: 'account' , component: AgencyAccountComponent},
  {path: 'addmanager' , component: AddManagerComponent},
  {path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    AgencyNavbarComponent,
    AgencyAccountComponent,
    AgencyEmailboxComponent,
    AgencyInvoiceComponent,
    DetailsInvoiceComponent,
    AgencyRateComponent,
    AgencyDealComponent,
    AgencyNewrentalComponent,
    AddManagerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPrintModule,
    NgxPayPalModule,
    RouterModule.forChild(routes)
  ]
})
export class AgencyModule { }
