import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SignUpRequestModel, SignUpResponseModel} from "../models/signUpDetails.model";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  rootURL = 'http://localhost:4000'

  signUp(signUpDetails: SignUpRequestModel): Observable<SignUpResponseModel> {
    return new Observable<SignUpResponseModel>(observer => {
      return this.http.post('http://localhost:4000/signup', signUpDetails)
        .subscribe(result => {
          observer.next(result as SignUpResponseModel)
          observer.complete()
        }, (error) => {
          return error(error)
        })
    })
  }
}
