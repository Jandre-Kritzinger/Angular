import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequestModel, LoginResponseModel} from "../models/loginDetails.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
  rootURL = 'http://localhost:4000'

  login(loginDetails: LoginRequestModel): LoginResponseModel{
    return new Promise((resolve, reject) => {
      return this.http.post(
        `${this.rootURL}/login`, JSON.stringify(loginDetails)
      ).subscribe((res) => {
        return resolve(res as LoginResponseModel)
      }, (err)=>{
        return reject(err)
      })
    })
  }
  /*addProspectConsent(data) {
    return new Promise((resolve, reject) => {
      return this.http.post(
        `${environment.oneLifeFunctionAppUrl}AddProspectConsent`, JSON.stringify(data)
      ).subscribe((res) => {
        return resolve(res as AddProspectConsentResponseModel)
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
