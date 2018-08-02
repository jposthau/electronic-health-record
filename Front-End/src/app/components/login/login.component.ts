import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public authenticated = false;
  public error = false;
  credentials = {username: '', password: ''};

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  login() {
    
    this.app.authenticate(this.credentials, () => {
      this.http.get('server/user').subscribe(response => {
        if(response != null){
          switch(response['principal']['roles'][0]['role']){
            case "ADMIN": {
              document.location.href="admin";
              console.log('admin login');
              break;
            }
            case "DOCTOR": {
              document.location.href="doctor/' + response['name']";
              console.log('doctor login');
              break;
            }
            case "PATIENT": {
              document.location.href="patient/' + response['name']";
              console.log('patient login');
              break;
            }
            default: {
              document.location.href="home";
              console.log('default login --role not detected');
              break;
            }
          }
          this.error = false;
        } else {this.error = true;}
      }, err => console.log('Login Error: ', err));
    });
  }

}