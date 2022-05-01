import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIDataService } from '../api-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public UserName = "";
  public Password = "";
  constructor(private router:Router,private apiService: APIDataService) {
   }
   
   
  ngOnInit(): void {
    
  }
  
  DashboardMenu(){
    //navigate to page 
    
    this.apiService.loginMethod(this.UserName,this.Password).subscribe((data:any) => {
      console.log(data);
      if(data.Access == true){
        sessionStorage.setItem("Access","true");
        sessionStorage.setItem("Name",data.UserInfo.FirstName + " " + data.UserInfo.LastName);
        this.router.navigate(['/Dashboard-Menu']);
      }
      else{
        alert("Login Failed");
      }
    });

  }
}
