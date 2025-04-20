import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-create-appointment',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {
  appointment:Appointment= new Appointment();
  constructor(private appointmentService:AppointmentService, private router:Router ,private loginService:LoginserviceService){}
  saveAppointment(){
    this .appointmentService.createAppointment(this.appointment).subscribe(data =>{
      console.log(data)
      this.goToAppointment();
    })
  }

  onSubmit(){
    if(this.appointment.name!="") {
      this.saveAppointment(); 
    }
    else{
      alert("Please Enter Patient Name");
    }
  }

  goToAppointment(){
    this.router.navigate(['/appointment']);
  }

  logout(){
    this.loginService.logoutAdminUser();
    this.router.navigate(['home'])

  }

}
