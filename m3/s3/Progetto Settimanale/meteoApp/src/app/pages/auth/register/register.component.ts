import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { IRegister } from '../Models/i-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  registerData:IRegister = {
    email: 'vincenzo@example.it',
    password: 'password',
    name: 'vincenzo'
  }


  save(){
    this.authSvc.signUp(this.registerData)
    .subscribe(_data => {
        this.router.navigate(['/auth/login'])
    })
  }

}
