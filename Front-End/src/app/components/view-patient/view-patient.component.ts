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

  patient;
  patientform: FormGroup;
  validMessage = '';

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPatient(this.route.snapshot.params.id);
    this.patientform = new FormGroup({
      name: new FormControl(this.patient.name, Validators.required),
      ssn: new FormControl(this.patient.ssn, Validators.required),
      birthDate: new FormControl(this.patient.birthDate,Validators.required),
      phone: new FormControl(this.patient.phone, Validators.required),
      email: new FormControl(this.patient.email, Validators.required),
      doctor: new FormControl(this.patient.doctor, Validators.required),
      insurance: new FormControl(this.patient.insurance, Validators.required)
    });
  }

  getPatient(id: number) {
    this.patient = JSON.parse(this.patientService.getPatient(id));
    console.log(this.patient);
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
