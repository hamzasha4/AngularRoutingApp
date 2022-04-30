import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public UserName = "";
  public Password = "";
  constructor(private router:Router,private client:HttpClient) {
   }
   
   
  ngOnInit(): void {
    
  }
  
  DashboardMenu(){
    //navigate to page 
    const body = {"UserName":this.UserName,"Password":this.Password};
    const headerss = new HttpHeaders();
    headerss.set('Content-Type','application/json');
    headerss.set('Access-Control-Allow-Origin', '*');
    this.client.post("http://localhost:3000/login",body,{headers:headerss}).subscribe((data:any) => {
      console.log(data);
      if(data.Access == "True"){
        sessionStorage.setItem("Name","Hamza Tahir");
        this.router.navigate(['/Dashboard-Menu']);
      }
      else{
        alert("Login Failed");
      }
    });

  }
}
