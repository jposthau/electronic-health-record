import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http: HttpClient) { }

  getLoginUsers() {
    return this.http.get('/server/api/v1/users');
  }

  getLoginUser(username: string) {
    return this.http.get('/server/api/v1/users/' + username);
  }

  createLoginUser(loginUser) {
    let body = JSON.stringify(loginUser);
    return this.http.post('/server/api/v1/users', body, httpOptions);
  }

  deleteLoginUser(username: string) {
    return this.http.delete('/server/api/v1/users/' + username);
  }

  updateLoginUser(loginUser) {
    let body = JSON.stringify(loginUser);
    return this.http.put('/server/api/v1/users', body, httpOptions);
  }

}
