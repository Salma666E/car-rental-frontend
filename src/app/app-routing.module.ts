import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'Admain' , loadChildren: () => import('src/app/components/admin/admin.module').then(m => m.AdminModule)},
  {path: 'Resmange' , loadChildren: () => import('src/app/components/resmanger/resmanger.module').then(m => m.ResmangerModule)},
  {path: 'Agency' , loadChildren: () => import('src/app/components/agency/agency.module').then(m => m.AgencyModule)},
  {path: 'client' , loadChildren: () => import('src/app/components/client/client.module').then(m => m.ClientModule)},
  {path :'Login',component: LoginComponent},//, canActivate: [LoginGuard]
  // {path :'ForgotPassword',component: RecoverPasswordComponent, canActivate: [LoginGuard]},
  {path:"",redirectTo:'Login',pathMatch:'full'},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
