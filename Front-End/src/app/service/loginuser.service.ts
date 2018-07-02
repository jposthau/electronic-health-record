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
    return this.http.get('/server/users');
  }

  getLoginUser(username: string) {
    this.http.get('/server/users/' + username).subscribe(data => sessionStorage.setItem('data', JSON.stringify(data)));
    var user = sessionStorage.getItem('data');
    sessionStorage.removeItem('data');
    return user;
  }

  createLoginUser(loginUser) {
    let body = JSON.stringify(loginUser);
    return this.http.post('/server/users', body, httpOptions);
  }

  deleteLoginUser(username: string) {
    return this.http.delete('/server/users/' + username);
  }

  updateLoginUser(loginUser) {
    let body = JSON.stringify(loginUser);
    return this.http.put('/server/users', body, httpOptions);
  }

}
