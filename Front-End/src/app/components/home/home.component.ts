import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public username;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.http.get('server/user').subscribe(response => {
      if(response != null){
        this.username = response['name'];
      }
    }, err => console.log('test', err));
  }


  getCurrentUser(){
  	this.http.get('server/user').subscribe(response => {
        console.log(response);
      }, err => console.log('test', err));
  }

}
