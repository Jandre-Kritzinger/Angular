import { Component } from '@angular/core';
import {RegistrationService} from "../services/registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';
  accessToken: any;
  constructor(private registerService: RegistrationService, private router: Router) {}
  async signUp(){
    let signUpDetails = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password
    }
    await this.registerService.signUp(signUpDetails).then((res) =>{
      this.accessToken = res.accessToken
      const success = res.success
      if(success){
        this.router.navigate(['/cars'])
      }else{
        this.router.navigate(['/login'])
      }
    })
  }
  // Add any component-specific logic or properties here
}

