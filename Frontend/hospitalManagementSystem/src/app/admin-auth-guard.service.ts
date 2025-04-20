import { Injectable } from '@angular/core';
import { LoginserviceService } from './loginservice.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private loginService: LoginserviceService, private router: Router) { }
  canActivate() {
    if (this.loginService.isAdminLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
