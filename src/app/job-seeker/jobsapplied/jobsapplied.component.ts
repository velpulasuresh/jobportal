import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobsapplied',
  templateUrl: './jobsapplied.component.html',
  styleUrls: ['./jobsapplied.component.css']
})
export class JobsappliedComponent implements OnInit {
appliedJobData: any;
  service2: any;

  constructor() { }

    ngOnInit(): void {
      // this.service2.getAppliedData().subscribe((result: any)=>{
      //   console.log(result);
      //   this.appliedJobData=result;
      // })
      this.getAppliedJobs();
    }
  
    getAppliedJobs() {
      this.service2.getAppliedJobData(localStorage.getItem('userId') as string)
        .subscribe(
          ( data: any) => {
            this.appliedJobData = data;
          }
        )
  }
  }
  


function getAppliedJobs() {
  throw new Error('Function not implemented.');
}

