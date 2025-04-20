import { Injectable } from '@angular/core';
import { UserCredService } from './user-cred.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private userCredService:UserCredService) { }
  authenticate(username:string, password:string):Observable<{success: boolean, userType:string}>{
    return this.userCredService.getUserCred(username,password).pipe (
      map(data =>{
        const key =Object.keys(data)[0];
        const success= key ==='true';
        const userType= data[key];
        return {success,userType};
      })
    )
  }

  isDoctorLoggedIn():boolean{
    let user= sessionStorage.getItem('doctoruser');
    console.log("Doctor logged in");
     if(user!=null){
      return true;
     }
     else{
      return false;
     }
  }

  logoutDoctorUser():void{
    console.log("User logged out");
    sessionStorage.removeItem('doctoruser');
  }
  isAdminLoggedIn():boolean{
    let user= sessionStorage.getItem('adminuser');
    console.log("Admin logged in");
     if(user!=null){
      return true;
     }
     else{
      return false;
     }
  }

  logoutAdminUser():void{
    console.log("Admin logged out");
    sessionStorage.removeItem('adminuser');
  }
}
