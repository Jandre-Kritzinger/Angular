import {Component, OnDestroy} from '@angular/core';
import {LoginService} from "../services/login.service";
import {Subject} from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  accessToken: any;
  email = '';
  password = '';
  constructor(private loginService: LoginService, private router: Router) {}
  destroy$: Subject<boolean> = new Subject<boolean>()
  login(){
    let loginDetails = {
      email: this.email,
      password: this.password
    }
     this.loginService.login(loginDetails).then((res) => {
       this.accessToken = res.accessToken
       const success = res.success
       if(success){
         this.router.navigate(['/cars'])
       } else {
         this.router.navigate(['/login'])
       }
    }).catch()
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
