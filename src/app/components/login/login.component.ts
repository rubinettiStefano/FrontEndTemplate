import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CredentialServiceService} from '../../services/credential-service.service';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private servizioCredenziali:CredentialServiceService,private http:HttpClient) {
  }

  credenziali= {username: '', password: ''};

  login() {
    this.servizioCredenziali.login(this.credenziali);
  }

  prova()
  {
    this.http.get<string>("/api/users/esempio").subscribe(res=>console.log(res));
  }
}
