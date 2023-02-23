import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SignUpRequestModel, SignUpResponseModel} from "../models/signUpDetails.model";
import {LoginRequestModel, LoginResponseModel} from "../models/loginDetails.model";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  rootURL = 'http://localhost:4000'

  signUp(signUpDetails: SignUpRequestModel): Promise<SignUpResponseModel> {
    return new Promise<SignUpResponseModel>((resolve, reject) => {
      return this.http.post('http://localhost:4000/signup', signUpDetails)
        .subscribe({
          next: (res) => {
            return resolve(res as SignUpResponseModel)
          },
          error: (err) => {
            return reject(err)
          }
        })
    })
  }
}
