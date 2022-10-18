import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { JobseekarComponent } from './jobseekar/jobseekar.component'; 
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginselectorComponent } from './loginselector/loginselector.component';

const routes:Routes=[
   
  {
    path: 'job-seeker', loadChildren: () => import('./job-seeker/job-seeker.module')
      .then(mod => mod.JobSeekerModule)
  },
  {
    path: 'recruiter', loadChildren: () => import('./recruiter/recruiter.module')
      .then(mod => mod.RecruiterModule)
  } ,
  { path: 'header', component: HeaderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'jobseekar',component: JobseekarComponent},
  {path:'content',component:ContentComponent},
  {path:'loginselector',component:LoginselectorComponent},
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent},  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
