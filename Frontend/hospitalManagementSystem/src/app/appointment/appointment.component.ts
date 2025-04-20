import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit{

  appointments:Appointment[]=[];
  constructor(private appointmentService:AppointmentService, private loginService:LoginserviceService, private router:Router) {}

  ngOnInit(): void {
    this.getAppointment();
  }

  getAppointment(){
    this.appointmentService.getAppointmentList().subscribe(data =>{
      this.appointments=data;
    })
  }

  delete(id:number) {
    this.appointmentService.deleteAppointment(id).subscribe(data =>{
      console.log(data);
      this.getAppointment()
    });
  }
  
  logout(){
    this.loginService.logoutAdminUser();
    this.router.navigate(['home'])

  }
}
