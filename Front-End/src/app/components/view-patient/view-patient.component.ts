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

  public patient;
  // patientform: FormGroup;
  // validMessage = '';
  public patId;
  public docId;

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.patId = this.route.snapshot.params.patId;
    this.docId = this.route.snapshot.params.docId;

    this.getPatient(this.docId,this.patId);

    // this.patientform = new FormGroup({
    //   name: new FormControl(this.patient.name, Validators.required),
    //   ssn: new FormControl(this.patient.ssn, Validators.required),
    //   birthDate: new FormControl(this.patient.birthDate,Validators.required),
    //   phone: new FormControl(this.patient.phone, Validators.required),
    //   email: new FormControl(this.patient.email, Validators.required),
    //   insurance: new FormControl(this.patient.insurance, Validators.required)
    // });

  }

  getPatient(docId: number, patId: number) {
    this.patientService.getADocPat(docId, patId).subscribe(data => 
      {
        this.patient = data;
      });
  }

  removePatient() {
    if(confirm("Are your sure you want to delete this patient?")) {
      this.patientService.deleteDocPat(this.docId, this.patId).subscribe();
      this.router.navigate(['/doctor/' + this.docId]);
    }
  }

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
