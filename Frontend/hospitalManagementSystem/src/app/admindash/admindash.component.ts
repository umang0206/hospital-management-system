import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-admindash',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  patients:Patient[]=[];
  constructor (private patientService:PatientService,private loginService:LoginserviceService, private router:Router){}
  ngOnInit():void{
    this.getPatient();
  }

  getPatient(){
    this.patientService.getPatientList().subscribe(data =>{
      this.patients=data;
    })
  }
  delete(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
      console.log(data)
      this.getPatient();
    })
  }
  logout(){
    this.loginService.logoutAdminUser();
    this.router.navigate(['home'])

  }
}
