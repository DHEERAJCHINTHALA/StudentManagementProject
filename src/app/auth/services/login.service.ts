import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Login = "http://localhost:60272/api/Authentication";

  constructor(private httpclient:HttpClient)
  {

  }

 logger(DATA:any)
 {
  return this.httpclient.post(this.Login,DATA);
 }
}
