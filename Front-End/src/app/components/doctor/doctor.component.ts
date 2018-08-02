import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  public patients;
  public username;
  public role;

  constructor(private route: ActivatedRoute, private router: Router, private app: AppService, private http: HttpClient) {
      this.route.params.subscribe(params => this.username = params['username']);
      this.http.get('server/user').subscribe(response => {
        if(response != null){
          this.role = response['principal']['roles'][0]['role'];
        }
        if(this.role == "DOCTOR" && response != null){
          this.http.get('server/doctor/' + this.username + '/patients').subscribe(data => {
            this.patients = data;
          }, err => {
            console.log('error! ', err);
            if(err.status == '401' || err.status == '403'){
              router.navigateByUrl('unauthorized');
            }
          });
        } else {
          router.navigateByUrl('unauthorized');
        }
      }, err => console.log('test', err));
  }

}
