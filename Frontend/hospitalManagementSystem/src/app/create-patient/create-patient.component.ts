import { Component } from '@angular/core';
import { Patient } from '../patient';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../patient.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-create-patient',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {
  patient:Patient= new Patient;
  constructor(private patientService:PatientService, private router:Router,private loginService:LoginserviceService){}
  savePateint(patient:Patient){
    this.patientService.createPatientDetails(patient).subscribe(data=>{
      console.log(data)
      this.goTodocdash()
    });
  }
  onSubmit() {
    if(this.patient.name !=""){
      this.savePateint(this.patient)
    }
    else {
      alert('Please enter patient name');
    }
  }
  goTodocdash(){
    this.router.navigate(['/docdash']);
  }

  docLogout(){
    this.loginService.logoutDoctorUser();
    this.router.navigate(['home'])

  }
}
