import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobseekar',
  templateUrl: './jobseekar.component.html',
  styleUrls: ['./jobseekar.component.css']
})
export class JobseekarComponent implements OnInit {
  active = 1;
  //declarations
  socialmedia = new FormArray([]);
  personalDetailsForm!: FormGroup;
  isSubmitted!: boolean;

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetailsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/(7|8|9)\d{9,9}$/)]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/)]],
      bio: ['', [Validators.required, Validators.minLength(25)]],
      type: ['', [Validators.required]],
      url: ['', [Validators.required]],
      socialmedia: this.socialmedia
    })
  }
get formControls(){
  return this.personalDetailsForm.controls['socialmedia'] as FormArray;
}
  add() {
    const test = this.personalDetailsForm.controls['socialmedia'] as FormArray
    test.push(this.formBuilder.group({
      type: ["", Validators.required],
      url: ["", Validators.required]
    }))
  }

  onSubmit() {
    this.isSubmitted=true;
    if(this.personalDetailsForm.valid){
      
    }
    else if(this.personalDetailsForm.invalid){
      return;
    }
  }
}
