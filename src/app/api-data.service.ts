import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { config } from './app-config';
@Injectable({
  providedIn: 'root'
})
export class APIDataService {

  constructor(private client:HttpClient) { }
  loginMethod(UserName:string,Password:string){
    const body = {"UserName":UserName,"Password":Password};
    const headerss = new HttpHeaders();
    headerss.set('Content-Type','application/json');
    headerss.set('Access-Control-Allow-Origin', '*');
    return this.client.post(config.apiBaseURL + "/login",body,{headers:headerss})
  }
}
