import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  
  userData:any[]=[];
  getUserDetails(event:any){
    if(event && event.userData ){
      this.userData.push(event.userData);
      this.isProfile = false;
      this.isLogin = false
    }
  }
isLogin:boolean=false;
showLogin(event:any){
  this.isLogin=event;
}
isProfile:boolean=false;
showProfile(event:any){
  this.isProfile=event;
}
}
