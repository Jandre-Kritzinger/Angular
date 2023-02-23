import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../services/login.service";
import {takeUntil} from "rxjs";
import {Subject} from 'rxjs';
import {LoginResponseModel} from "../models/loginDetails.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accessToken: any;
  email = '';
  password = '';
  constructor(private loginService: LoginService, private router: Router) {}
  destroy$: Subject<boolean> = new Subject<boolean>()
  async login(){
    let loginDetails = {
      email: this.email,
      password: this.password
    }
     await this.loginService.login(loginDetails).then((res) => {
       this.accessToken = res
       debugger
       if(this.accessToken === "Invalid Details"){
         this.router.navigate(['/cars'])
       } else {
         this.router.navigate(['/home'])
       }
    })
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


  /*login() {

    let loginDetails = {
      email: this.email,
      password: this.password
    }
      this.loginService.login(loginDetails).subscribe(
          (data: any) => {
          this.accessToken = data
        }
      )
  }*/
}
