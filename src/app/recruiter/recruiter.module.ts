import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { PostedjobComponent } from './rdashboard/postedjob/postedjob.component';
import { PostjobComponent } from './rdashboard/postjob/postjob.component';
import { RDashboardComponent } from './rdashboard/rdashboard.component';
import { RLoginComponent } from './rlogin/rlogin.component';
import { RSignupComponent } from './rsignup/rsignup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgToastModule } from 'ng-angular-popup';
import { ProfileComponent } from './rdashboard/profile/profile.component';


@NgModule({
  declarations: [

    RLoginComponent,
    RSignupComponent,
    RDashboardComponent,
    PostjobComponent,
    PostedjobComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgToastModule
  ]
})
export class RecruiterModule { }
