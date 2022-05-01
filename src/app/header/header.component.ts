import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any>= new EventEmitter();
  public UserName = "User Name";
  constructor() { }

  ngOnInit(): void {
    this.UserName = sessionStorage.getItem("Name") ?? "";
  }
  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
  logout(){
    sessionStorage.removeItem("Access");
    sessionStorage.removeItem("Name");
  }
}
