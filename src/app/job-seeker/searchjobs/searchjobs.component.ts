import { Component, OnInit } from '@angular/core';
import { RegServiceService } from 'src/app/reg-service.service';
import { UserServicesService } from 'src/app/user-services';

@Component({
  selector: 'app-searchjobs',
  templateUrl: './searchjobs.component.html',
  styleUrls: ['./searchjobs.component.css']
})
export class SearchjobsComponent implements OnInit {
  jobData: any;
  email: any;
  userId: any;
  UserData: any;
  appliedData: any;
  searchText: any;
  isApply: Boolean = true;
  isApplied: boolean = false;

  constructor(private listUser: UserServicesService, private listUser2: RegServiceService) { }

  ngOnInit(): void {
    this.listUser2.getJobData().subscribe((result) => {
      console.log(result);
      this.jobData = result;
    })
    this.email = localStorage.getItem('email')
    this.userId = localStorage.getItem('userId')
  }
  onApplyClick(user: any) {
    this.listUser.saveAppliedData({ ...user, email: this.email, userId: this.userId }).subscribe((result) => {
      // this.toast.success("Job applied");
      this.isApply = false;
      this.isApplied = true;
    })
    // const rJobDetails = this.userData.find((item:any) => (item.jobtitle === this.appliedData.jobtitle))
    // localStorage.setItem('rJobtitle', rJobDetails.jobtitle);
  }
}


