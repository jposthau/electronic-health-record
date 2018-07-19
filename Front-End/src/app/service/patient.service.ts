import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  getDocPats(doctorId: number) {
    return this.http.get('/server/doctor/' + doctorId + '/patients');
  }

  getADocPat(doctorId: number, patientId: number) {
    return this.http.get('/server/doctor/' + doctorId + '/patients/' + patientId);
  }

  createDocPat(doctorId: number, docPat) {
    let body = JSON.stringify(docPat);
    return this.http.post('server/doctor/' + doctorId + '/patients', body, httpOptions);
  }

  deleteDocPat(doctorId: number, patientId:number) {
    return this.http.delete('server/doctor/' + doctorId + '/patients/delete/' + patientId);
  }

  getPatient(id: number) {
    return this.http.get('/server/patient/' + id);
  }

  createPatient(patient) {
    // let body = JSON.stringify(patient);
    // return this.http.post('/server/patients', body, httpOptions)
  }

  deletePatient(id: number) {
    // return this.http.delete('/server/patients/' + id);
  }

  updatePatient(patient) {
    // let body = JSON.stringify(patient);
    // return this.http.put('/server/patients', body, httpOptions);
  }

}
