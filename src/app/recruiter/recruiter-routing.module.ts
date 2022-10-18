import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './rdashboard/profile/profile.component';
import { RDashboardComponent } from './rdashboard/rdashboard.component';
import { RLoginComponent } from './rlogin/rlogin.component';
import { RSignupComponent } from './rsignup/rsignup.component';

const routes: Routes = [

  
  {path:'rdashboard',component:RDashboardComponent},
  {path:'rsignup',component:RSignupComponent},
  {path:'rlogin',component:RLoginComponent},
  {path:'rprofile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
