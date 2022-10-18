import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { RegServiceService } from 'src/app/reg-service.service';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  postjob: any;

  constructor( private formBuilder: FormBuilder, private userService: RegServiceService,private router:Router,private toast:NgToastService) { }

  ngOnInit(): void {
    this.postjob = this.formBuilder.group({
      jobtitle:["",Validators.required],
      joblocation:["",Validators.required],
      jdesc:["",Validators.required],
      skills:["",Validators.required]
    })
  }
  
  onPost(){
    this.userService.saveJobData(this.postjob.value).subscribe((result: any) => {
      this.toast.success({ detail: 'Success!', summary: 'You have succesfully posted a job', duration: 3000 });
      this.postjob.reset({});
    })
  }
}


