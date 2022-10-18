import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-rdashboard',
  templateUrl: './rdashboard.component.html',
  styleUrls: ['./rdashboard.component.css']
})
export class RDashboardComponent implements OnInit {

  isPost: boolean = false;
  isPosted: boolean = false;
  isProfile:boolean = true;

  constructor(private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }

  onPostJob() {
    this.isPost = true;
    this.isPosted = false;
    this.isProfile=false;

  }
  onPostedJob() {
    this.isPosted = true;
    this.isPost = false;
    this.isProfile=false;
  }
  onProfile(){
    this.isPost=false;
    this.isPosted=false;
    this.isProfile=true;
  }

}
