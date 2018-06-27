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
    return this.http.get('/server/patients');
  }

  getPatient(id: number) {
    return this.http.get('/server/patients/' + id);
  }

  createPatient(patient) {
    let body = JSON.stringify(patient);
    return this.http.post('/server/patients', body, httpOptions)
  }

  deletePatient(id: number) {
    return this.http.delete('/server/patients/' + id);
  }

  updatePatient(patient) {
    let body = JSON.stringify(patient);
    return this.http.put('/server/patients', body, httpOptions);
  }

}
