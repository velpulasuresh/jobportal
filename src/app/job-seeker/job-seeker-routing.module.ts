import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchjobsComponent } from './searchjobs/searchjobs.component';
import { JobsappliedComponent } from './jobsapplied/jobsapplied.component';
import { JsProfileComponent } from './js-profile/js-profile.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'searchjobs', component: SearchjobsComponent },
  { path: 'JobsappliedComponent', component: JobsappliedComponent },
  { path: 'jsprofile',component:JsProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekerRoutingModule { }
