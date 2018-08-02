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

  getPatient(id: number) {
    return this.http.get('/server/patient/' + id);
  }

  getPatientsDoctor(id: number) {
    return this.http.get('/server/patient/' + id + '/doctor');
  }

  getDoctor(id: number) {
    return this.http.get('/server/doctor/' + id);
  }

  getDoctorsPatients(id: number) {
    return this.http.get('/server/doctor/' + id + '/patients');
  }

  getDoctorsPatient(docId: number, patId: number) {
    return this.http.get('/server/doctor/' + docId + '/patients/' + 'patId');
  }

  getAllPatients(id: number) {
    return this.http.get('/server/doctor/' + id + '/patients/all');
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
