import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppService } from '../../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {

  public patient;
  patientform: FormGroup;
  validMessage = '';
  public patId;
  public username;

  constructor(private route: ActivatedRoute, private router: Router, private app: AppService, private http: HttpClient) {
    this.route.params.subscribe(params => this.username = params['username']);   
    this.route.params.subscribe(params => this.patId = +params['patId']);  
    this.http.get('server/doctor/' + this.username + '/patients/' + this.patId).subscribe(
      data => this.patient = data,
      err => {
        console.log('error! ', err);
        if(err.status == '401' || err.status == '403'){
          router.navigateByUrl('unauthorized');
        }

      });

  }

  // removePatient() {
  //   if(confirm("Are your sure you want to delete this patient?")) {
  //     this.patientService.deleteDocPat(this.docId, this.patId).subscribe();
  //     this.router.navigate(['/doctor/' + this.docId]);
  //   }
  // }

  // updatePatient() {
  //   if (this.patientform.valid) {
  //     this.validMessage = "Patient updated successfully!";
  //     this.patientService.updatePatient(this.patientform.value).subscribe(
  //       data => {
  //         return true;
  //       },
  //       err => console.error(err),
  //       () => console.log('Patient updated.')
  //     );
  //   } else {
  //     this.validMessage = "Error while updating patient.";
  //   }
  // }
}
