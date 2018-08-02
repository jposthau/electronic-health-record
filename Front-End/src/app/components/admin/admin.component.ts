import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  public users;

  constructor(private router: Router, private app: AppService, private http: HttpClient) {
    http.get('server/users').subscribe(
      data => this.users = data,
      err => {
        console.log('error! ', err);
        if(err.status == '401' || err.status == '403'){
          router.navigateByUrl('unauthorized');
        }

      });
  }

}
