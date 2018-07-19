import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  public patients;
  public docId;

  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.docId = this.route.snapshot.params.id;
    this.getPatients();
  }

  getPatients() {
    this.patientService.getDocPats(this.docId).subscribe(
      data => this.patients = data
    );
  }

}
