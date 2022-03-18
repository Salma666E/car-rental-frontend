import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { HistoryComponent } from './history/history.component';
import { AccountComponent } from './account/account.component';
import { NavbarResmanagerComponent } from './navbar-resmanager/navbar-resmanager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RegulationComponent } from './regulation/regulation.component';
import { EditHistoryComponent } from './edit-history/edit-history.component';


const routes: Routes = [ 
  {path: 'home' , component: HomeComponent},
  {path: 'emailbox' , component: MailboxComponent},
  {path: 'history/edit/:id' , component: EditHistoryComponent},
  {path: 'regulat' , component: RegulationComponent},
  {path: 'history' , component: HistoryComponent},
  {path: 'account' , component: AccountComponent},
  {path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path:"**", component:NotFoundComponent}
];



@NgModule({
  declarations: [
    HomeComponent,
    MailboxComponent,
    HistoryComponent,
    AccountComponent,
    NavbarResmanagerComponent,
    RegulationComponent,
    EditHistoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ResmangerModule { }
