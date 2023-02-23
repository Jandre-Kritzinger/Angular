import { Component } from '@angular/core';
import {RegistrationService} from "../services/registration.service";

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
  constructor(private registerService: RegistrationService) {}
  async signUp(){
    let signUpDetails = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password
    }
    await this.registerService.signUp(signUpDetails).subscribe((res) =>{
      const resultString = JSON.stringify(res)
      console.log(res)
      this.accessToken = res
    })
  }
  // Add any component-specific logic or properties here
}

