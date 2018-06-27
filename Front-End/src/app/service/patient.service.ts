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

  getPatients() {
    return this.http.get('/server/api/v1/patients');
  }

  getPatient(id: number) {
    return this.http.get('/server/api/v1/patients/' + id);
  }

  createPatient(patient) {
    let body = JSON.stringify(patient);
    return this.http.post('/server/api/v1/patients', body, httpOptions)
  }

  deletePatient(id: number) {
    return this.http.delete('/server/api/v1/patients/' + id);
  }

  updatePatient(patient) {
    let body = JSON.stringify(patient);
    return this.http.put('/server/api/v1/patients', body, httpOptions);
  }

}
