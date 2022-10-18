

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/user-services';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  //declarations
  loginForm: FormGroup = this.formBuilder.group({
    loginEmail: ["", [Validators.required, Validators.email]],
    loginPass: ["", [Validators.required,]]
  })
  userData: any;
  isSubmitted!: boolean;
  isSubmitted2!: boolean;


  //constructors
  constructor(private formBuilder: FormBuilder, private userService: UserServicesService,private router:Router) { }

  //ngOnInIt
  ngOnInit(): void {
    this.userService.getUserData().subscribe((result: any) => {
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
        this.router.navigate(['/job-seeker/dashboard'])
      }
      else if (this.userData.some((item: any) => (item.email !== this.loginForm.controls['loginEmail'].value))) {
        this.isSubmitted2 = true;
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



