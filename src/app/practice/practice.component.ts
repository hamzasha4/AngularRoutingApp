import { Component, OnInit, AfterViewInit } from '@angular/core';
import { APIDataService } from '../api-data.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  public docs:any
  constructor() { 
  }

  ngOnInit(): void {

  }

  checkValue(){
    this.docs = document.getElementById("frame");
    console.log(this.docs.contentDocument);
  }
  
  ngAfterViewInit(): void {
    setTimeout(this.checkValue,10000);
  }
}
