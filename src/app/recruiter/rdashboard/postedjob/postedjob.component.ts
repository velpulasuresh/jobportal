import { Component, OnInit } from '@angular/core';
import { RegServiceService } from 'src/app/reg-service.service';

@Component({
  selector: 'app-postedjob',
  templateUrl: './postedjob.component.html',
  styleUrls: ['./postedjob.component.css']
})
export class PostedjobComponent implements OnInit {

  constructor(private listUser:RegServiceService )  { }
  searchText:any;
    jobData:any=[];
    ngOnInit(): void {
      this.listUser.getJobData().subscribe((result: any)=>{
        console.log(result);
        this.jobData=result;
      })
    }
    
}
