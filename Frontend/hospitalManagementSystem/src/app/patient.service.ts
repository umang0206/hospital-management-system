import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }
  baseURL: string = "http://localhost:8080/patient";

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseURL}`)
  }
  deletePatient(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
  createPatientDetails(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseURL}`, patient);
  }
  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`)
  }

  updatePatientDetails(patient: Patient, id: number): Observable<Object> {
    return this.httpClient.put<Patient>(`${this.baseURL}/update-patient/${id}`, patient)
  }
}
