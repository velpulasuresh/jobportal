import { Component, Input, OnInit } from '@angular/core';
import { UserServicesService } from '../user-services';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 
  constructor(private userService: UserServicesService) { }
  collection:any=[];

  ngOnInit(): void {
    this.userService.getUserData().subscribe((result)=>{
      console.warn(result)
      this.collection=result
    })
  }
  deleteUser(user:any){
    this.collection.splice(user-1,1)
    this.userService.deleteUser(user).subscribe((result:any)=>{
      console.warn('result',result)
    })
  }

}
