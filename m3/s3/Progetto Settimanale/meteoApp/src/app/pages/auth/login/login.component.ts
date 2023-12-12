import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ILogin } from '../Models/i-login';
import { catchError, of } from 'rxjs';

@Component({
  selector: '.app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  loginData:ILogin = {
    email: 'vincenzo@example.it',
    password: 'password'
  }

  errorMessage:string = '';

  save() {
    this.authSvc.login(this.loginData)
        .pipe(
            catchError((error: any) => {
              console.error('Errore durante il login:', error);
              this.errorMessage = 'Credenziali non valide. Riprova.';
              return of(null);
            })
        )
        .subscribe((data) => {
            if (data !== null) {
                this.router.navigate(['/dashboard']);
            }
        });
}
}
