

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { RegServiceService } from 'src/app/reg-service.service';


@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.css']
})
export class RLoginComponent implements OnInit {
  

  //declarations
  loginForm: FormGroup = this.formBuilder.group({
    loginEmail: ["", [Validators.required, Validators.email]],
    loginPass: ["", [Validators.required,]]
  })
  userData: any;
  isSubmitted!: boolean;
  isSubmitted2!: boolean;


  //constructors
  constructor(private formBuilder: FormBuilder,private toast:NgToastService, private userService: RegServiceService,private router:Router) { }

  //ngOnInIt
  ngOnInit(): void {
    this.userService.getregData().subscribe((result: any) => {
      console.log(result);
      this.userData = result;
    })
  }

  //function definitions
  onLogin() {
    // debugger
    if (this.loginForm.valid) {
      if (this.userData.some((item: any) => (item.email === this.loginForm.controls['loginEmail'].value) && (item.password === this.loginForm.controls['loginPass'].value))) {
        this.isSubmitted = true;
        this.toast.success({ detail: 'Success!', summary: 'logged in successsfully', duration: 3000 });
        this.router.navigate(['/recruiter/rdashboard'])
      }
      else if (this.userData.some((item: any) => (item.email !== this.loginForm.controls['loginEmail'].value))) {
        this.isSubmitted2 = true;
        this.toast.error({ detail: 'error!', summary: 'UserDetails are incorrect', duration: 3000 });
      }
    }
  }

  closeAlert() {
    this.isSubmitted = false;
  }
  closeAlert2() {
    this.isSubmitted2 = false;
  }
}



