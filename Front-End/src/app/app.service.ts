import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AppService {

  authenticated = false;
  roles = 'test';

  constructor(private http: Http) {
  }

  authenticate(credentials, callback) {

    if(credentials != null){

      const headers = new Headers ({
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : "Basic "+btoa(credentials.username+":"+credentials.password)
    });

      this.http.get('server/user', {headers: headers}).subscribe(
        response => {
          if (response['name']) {
              this.authenticated = true;
              this.roles = response['principal']['authorities'];
          } else {
              this.authenticated = false;
          }
          return callback && callback();
        }, err => {
          console.log('app! ', err);
        });
    }
  }

}