import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }
  baseURL:string="http://localhost:8080/appointment";

  getAppointmentList():Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
  }

  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.baseURL}`, appointment)
  }
  deleteAppointment(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
