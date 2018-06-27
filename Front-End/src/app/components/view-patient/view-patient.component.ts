import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  patient = JSON.parse('[{"id":0,"ssn":"000-00-0000","email":"email@address.com","name":"Firstname Lastname","phone":"555-1234","insurance":"some insurance","birthDate":"01-01-1999"}]');
  patientform: FormGroup;
  validMessage = '';

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPatient(this.route.snapshot.params.id);
    this.patientform = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      ssn: new FormControl('', Validators.required),
      birthDate: new FormControl('',Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      doctor: new FormControl('', Validators.required),
      insurance: new FormControl('', Validators.required)
    });
  }

  getPatient(id: number) {
    this.patientService.getPatient(id).subscribe(
      data => {this.patient = data;},
      err => console.error(err),
      () => console.log('patient loaded')
    );
  }

  deletePatient(id: number) {
    if(confirm("Are your sure you want to delete this patient?"))
      {this.patientService.deletePatient(id).subscribe(
        data => {this.router.navigate(['/doctor']);},
        err => console.error(err),
        () => console.log('patient deleted')
      );}
  }

  updatePatient() {
    if (!this.patientform.controls['id'].valid){this.patientform.controls['id'].setValue(this.patient.id);}
    if (!this.patientform.controls['name'].valid){this.patientform.controls['name'].setValue(this.patient.name);}
    if (!this.patientform.controls['ssn'].valid){this.patientform.controls['ssn'].setValue(this.patient.ssn);}
    if (!this.patientform.controls['birthDate'].valid){this.patientform.controls['birthDate'].setValue(this.patient.birthDate);}
    if (!this.patientform.controls['phone'].valid){this.patientform.controls['phone'].setValue(this.patient.phone);}
    if (!this.patientform.controls['email'].valid){this.patientform.controls['email'].setValue(this.patient.email);}
    if (!this.patientform.controls['doctor'].valid){this.patientform.controls['doctor'].setValue(this.patient.doctor);}
    if (!this.patientform.controls['insurance'].valid){this.patientform.controls['insurance'].setValue(this.patient.insurance);}
    if (this.patientform.valid) {
      this.validMessage = "Patient updated successfully!";
      this.patientService.updatePatient(this.patientform.value).subscribe(
        data => {
          return true;
        },
        err => console.error(err),
        () => console.log('Patient updated.')
      );
    } else {
      this.validMessage = "Error while updating patient.";
    }
  }
}
