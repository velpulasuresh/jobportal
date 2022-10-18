import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekerRoutingModule } from './job-seeker-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgToastModule } from 'ng-angular-popup';
import { JobsappliedComponent } from './jobsapplied/jobsapplied.component';
import { SearchjobsComponent } from './searchjobs/searchjobs.component';
import { JsProfileComponent } from './js-profile/js-profile.component';
// import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [

    DashboardComponent,
    LoginComponent,
    SignupComponent,
    SearchjobsComponent,
    JobsappliedComponent,
    JsProfileComponent
  ],
  imports: [
    CommonModule,
    JobSeekerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgToastModule
  ]
})
export class JobSeekerModule { }
