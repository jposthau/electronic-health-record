import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private router: Router, private app: AppService, private http: HttpClient) { }

  getLoginUsers() {
    return this.http.get('/server/users');
  }

  getLoginUser(id: number) {
    return this.http.get('server/users/' + id);
  }

  createLoginUser(user, role) {
    let u = JSON.stringify(user);
    let r = JSON.stringify(role);
    var str = r.substring(1,r.length-2);
    var str2 = u.substring(0,u.length-1);
    var str3 = str2+',"roles":[{'+str+'}]}';
    return this.http.post('/server/users', str3, httpOptions);
  }

  deleteLoginUser(id: number) {
    return this.http.delete('/server/users/' + id);
  }

  updateLoginUser(loginUser) {
    let body = JSON.stringify(loginUser);
    return this.http.put('/server/users', body, httpOptions);
  }

}
