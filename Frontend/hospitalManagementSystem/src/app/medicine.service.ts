import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }
  baseURL:string="http://localhost:8080/medicine"

  getMedicineList():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseURL}`);
  }
  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseURL}`,medicine)
  }
  updateMedicine(medicine:Medicine, id:number):Observable<Medicine>{
    return this.httpClient.put<Medicine>(`${this.baseURL}/update-medicine/${id}`, medicine);
    
  }
  getMedicineById(id:number):Observable<Medicine>{
      return this.httpClient.get<Medicine>(`${this.baseURL}/${id}`)
  }
  deleteMedicineById(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseURL}/${id}`);
  }
  
}
