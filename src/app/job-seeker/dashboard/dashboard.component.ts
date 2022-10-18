import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isDashboard: boolean = true;
  isProfile: boolean = false;
  isSearchjob:boolean = false;
  isJobsapplied:boolean = false;
  isMessages:boolean = false;

  constructor(private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  onDashboard(){
    this.isDashboard = true;
    this.isProfile = false;
    this.isSearchjob = false;
    this.isMessages = false;
    this.isJobsapplied = false;
  }

  onProfile() {
    this.isDashboard = false;
    this.isProfile = true;
    this.isSearchjob = false;
    this.isMessages = false;
    this.isJobsapplied = false;
  }

  onSearchjob() {
    this.isDashboard = false;
    this.isProfile = false;
    this.isSearchjob = true;
    this.isMessages = false;
    this.isJobsapplied = false;
  }

  onMessages(){
    this.isDashboard = false;
    this.isProfile = false;
    this.isSearchjob = false;
    this.isMessages = true;
    this.isJobsapplied = false;
  }
  onJobsapplied(){
    this.isDashboard = false;
    this.isProfile = false;
    this.isSearchjob = false;
    this.isMessages = false;
    this.isJobsapplied = true;
  }
}
