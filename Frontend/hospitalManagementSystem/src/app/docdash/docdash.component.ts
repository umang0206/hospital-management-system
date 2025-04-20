import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-docdash',
  imports: [CommonModule,RouterModule],
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  patients:Patient[]=[];
  constructor (private patientService:PatientService, private router: Router, private loginService:LoginserviceService){}
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
      console.log(data);
      this.getPatient()
    })
  }
  update(id:number){
    this.router.navigate(["update-patient", id])
  }
  view(id:number){
    this.router.navigate(['view-patient',id])
  }
  
  docLogout(){
    this.loginService.logoutDoctorUser();
    this.router.navigate(['home'])

  }
}
