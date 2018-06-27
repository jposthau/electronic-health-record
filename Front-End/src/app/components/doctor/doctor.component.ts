import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  public patients;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatients().subscribe(
      data => { this.patients = data},
      err => console.error(err),
      () => console.log('patients loaded')
    );
  }

}
