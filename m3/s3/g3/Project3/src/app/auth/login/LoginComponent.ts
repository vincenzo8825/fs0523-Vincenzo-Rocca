import { LoginComponent } from './loginComponent';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login() {
    throw new Error('Method not implemented.');
  }

  username: string = "";
  password = '';

  constructor(private authService: AuthService) { }


}
