import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
  rootURL = 'http://localhost4000'
  login(loginDetails: any){
    return this.http.post(this.rootURL + "/login", {loginDetails})
  }
  /*login(loginDetails: any): any{
    this.http.post(this.api+"login", loginDetails)
      .subscribe(
        data => {
          return data
        }
      )
  }*/
}
