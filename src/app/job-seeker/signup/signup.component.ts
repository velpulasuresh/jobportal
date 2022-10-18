import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserServicesService } from 'src/app/user-services';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm!:FormGroup;
  isSubmitted: boolean = false;
  userData: any=[];

  
  
  

  constructor(private formBuilder: FormBuilder, private userService: UserServicesService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe((result: any) => {
      console.log(result);
      this.userData = result;
    })
    this.registerForm = this.formBuilder.group({
      fname: ["", [Validators.required, Validators.minLength(5)]],
      lname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/(7|8|9)\d{9,9}$/)]],
      type: ['', [Validators.required]],
    })
  }

  collectUser() {
    // debugger
    if (this.registerForm.valid) {
      if (this.userData.some((item: any) => item.email === this.registerForm.controls['email'].value)) {
        alert('User already exists');
        return;
      }
      this.userService.saveUser(this.registerForm.value).subscribe((result: any) => {
        this.isSubmitted = true;
        this.registerForm.reset({});
        this.router.navigate(['/job-seeker/login'])
      })
    }

  }

  closeAlert() {
    this.isSubmitted = false;
  }
}