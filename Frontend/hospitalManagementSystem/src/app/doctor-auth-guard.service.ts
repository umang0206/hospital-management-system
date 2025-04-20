import { Injectable } from '@angular/core';
import { LoginserviceService } from './loginservice.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthGuardService implements CanActivate {

  constructor(private loginService:LoginserviceService, private router:Router) { }
  canActivate(){
    if(this.loginService.isDoctorLoggedIn()){
      return true;
    }
    else {
      this.router.navigate(['login'])
      return false;
    }
  }

}
