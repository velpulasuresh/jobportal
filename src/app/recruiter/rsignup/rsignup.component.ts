import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegServiceService } from 'src/app/reg-service.service';
@Component({
  selector: 'app-rsignup',
  templateUrl: './rsignup.component.html',
  styleUrls: ['./rsignup.component.css']
})
export class RSignupComponent implements OnInit {

  registerForm!: FormGroup;
  // isSubmitted: boolean = false;
  regData: any;



  constructor(private formBuilder: FormBuilder, private userService: RegServiceService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getregData().subscribe((result: any) => {
      console.log(result);
      this.regData = result;
    })
    this.registerForm = this.formBuilder.group({
      fname: ["", [Validators.required, Validators.minLength(5)]],
      lname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    })
  }

  collectUser() {
    debugger
    if (this.registerForm.valid) {
      if (this.regData.some((item: any) => item.email === this.registerForm.controls['email'].value)) {
        alert('User already exists');
        return;
      }
      this.userService.saveReg(this.registerForm.value).subscribe((result: any) => {
        // this.isSubmitted = true;
        this.registerForm.reset({});
        this.router.navigate(['/recruiter/rlogin'])
      })
    }

  }
}