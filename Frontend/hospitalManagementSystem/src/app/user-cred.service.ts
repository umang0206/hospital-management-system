import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCredService {

  constructor(private httpClient:HttpClient) { }
  baseURL:string="http://localhost:8080/login"

  getUserCred(username:String,password:String){
    return this.httpClient.get<{ [key: string]: string }>(`${this.baseURL}/${username}/${password}`)
  }
}
