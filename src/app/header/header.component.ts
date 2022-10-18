import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showArrow!: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  @Output() isLoginClicked: any = new EventEmitter<boolean>();
  isLogin() {
    this.showArrow = true;
    this.isLoginClicked.emit(true);
  }
  // @Output() isProfileClicked: any = new EventEmitter<boolean>();
  // isProfile() {
  //   this.showArrow = true;
  //   this.isProfileClicked.emit(true);
  // }
  onArrowClick() {
    this.isLoginClicked.emit(false);
    // this.isProfileClicked.emit(false);
    this.showArrow = false;

  }

}
