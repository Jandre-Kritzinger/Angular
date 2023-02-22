import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../services/login.service";
import {takeUntil} from "rxjs";
import {Subject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accessToken: any;
  email = '';
  password = '';
  constructor(private loginService: LoginService) {}
  destroy$: Subject<boolean> = new Subject<boolean>()
  login(){
    let loginDetails = {
      email: this.email,
      password: this.password
    }
     this.loginService.login(loginDetails).pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
      console.log('message::::', data)
      this.accessToken = data
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
