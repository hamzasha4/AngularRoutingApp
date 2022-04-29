import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {
  sideBarOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggle(){
    this.sideBarOpen=!this.sideBarOpen
  }
}
