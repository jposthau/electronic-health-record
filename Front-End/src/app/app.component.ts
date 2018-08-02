import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string = "Electronic Health Record";
  username;
  role;
  public loggedIn = false;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.http.get('server/user').subscribe(response => {
      if(response != null){
        this.username = response['name'];
        this.loggedIn = true;
      } else {this.loggedIn = false;}
    }, err => console.log('test', err));

    this.app.authenticate(undefined, undefined);
  }

    logout() {
      this.http.get('server/logout', {}).subscribe(data => {
          this.app.authenticated = false;
          document.location.href="";
          console.log("Logout Successful");
      });
    }

    // admin() {
    //   console.log("admin called")
    //   this.router.navigateByUrl("admin");
    // }

    // doctor() {
    //   console.log("doctor called")
    //   this.router.navigateByUrl("doctor/" + this.username);
    // }

    // patient() {
    //   console.log("patient called")
    //   this.router.navigateByUrl("patient/" + this.username);
    // }

    // check() {
    //   this.http.get('server/user').subscribe(data => {
    //     if(data != null) {
    //       this.username = data['name'];
    //       this.role = data['principal']['authorities'][0]['authority'];
    //     }
    //   });
    // }

}
