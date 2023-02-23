import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequestModel, LoginResponseModel} from "../models/loginDetails.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
  rootURL = 'http://localhost:4000'

  login(loginDetails: LoginRequestModel): Promise <LoginResponseModel> {
    return new Promise<LoginResponseModel>((resolve, reject) => {
      return this.http.post(
        'http://localhost:4000/login', loginDetails
      ).subscribe({
        next: (res) => {
          return resolve(res as LoginResponseModel)
        },
        error: (err) => {
          return reject(err)
        }
      })
    })
  }

  /*login(loginDetails: LoginRequestModel): Observable<LoginResponseModel>{
   return new Observable<LoginResponseModel> (observer => {
     return this.http.post('http://localhost:4000/login', loginDetails)
       .subscribe(result => {
         observer.next(result as LoginResponseModel)
         observer.complete()
     }, (error)=>{
       return error
     })
   })
 }*/

  /*login(loginDetails: LoginRequestModel) {
    return new Promise((resolve, reject) => {
      return this.http.post(
        'http://localhost:4000/login', loginDetails
      ).subscribe((res) => {
        return resolve(res as LoginResponseModel)
      }, (err) => {
        return reject(err)
      })
    })
  }*/

  /*login(loginDetails: any): any{
    this.http.post(this.api+"login", loginDetails)
      .subscribe(
        data => {
          return data
        }
      )
  }*/
}
