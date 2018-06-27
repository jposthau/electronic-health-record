import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  patientform: FormGroup;
  validMessage: string ="";

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientform = new FormGroup({
      name: new FormControl('', Validators.required),
      ssn: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl(''),
      doctor: new FormControl(''),
      insurance: new FormControl('')
    });
  }

  submitRegistration() {

    if (this.patientform.valid) {
      this.validMessage = "Your patient registration has been submitted. Thank you!";
      this.patientService.createPatient(this.patientform.value).subscribe(
        data => {
          this.patientform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}
