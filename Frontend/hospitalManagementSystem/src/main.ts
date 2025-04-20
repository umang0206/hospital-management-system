import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterModule, Routes } from '@angular/router'; // Import RouterModule
import { AppointmentComponent } from './app/appointment/appointment.component'; // Import AppointmentComponent
import { AdmindashComponent } from './app/admindash/admindash.component';
import { Component } from '@angular/core';
import { CreateAppointmentComponent } from './app/create-appointment/create-appointment.component';
import { HomeComponent } from './app/home/home.component';
import { DocdashComponent } from './app/docdash/docdash.component';
import { CreatePatientComponent } from './app/create-patient/create-patient.component';
import { MedicinelistComponent } from './app/medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './app/create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './app/update-patient/update-patient.component';
import { ViewPatientComponent } from './app/view-patient/view-patient.component';
import { UpdateMedicineComponent } from './app/update-medicine/update-medicine.component';
import { LoginComponent } from './app/login/login.component';
import { AdminAuthGuardService } from './app/admin-auth-guard.service';
import { DoctorAuthGuardService } from './app/doctor-auth-guard.service';

// Define routes
const routes: Routes = [
  { path: 'admin', component: AdmindashComponent, canActivate: [AdminAuthGuardService] },
  { path: 'appointment', component: AppointmentComponent, canActivate: [AdminAuthGuardService] },
  { path: 'create-appointment', component: CreateAppointmentComponent, canActivate: [AdminAuthGuardService] },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'docdash', component: DocdashComponent, canActivate: [DoctorAuthGuardService] },
  { path: 'add-patient', component: CreatePatientComponent, canActivate: [DoctorAuthGuardService] },
  { path: 'medicinelist', component: MedicinelistComponent, canActivate: [DoctorAuthGuardService] },
  { path: 'addmedicine', component: CreateMedicineComponent, canActivate: [DoctorAuthGuardService] },
  { path: 'update-patient/:id', component: UpdatePatientComponent, canActivate: [DoctorAuthGuardService] },
  { path: 'view-patient/:id', component: ViewPatientComponent, canActivate: [DoctorAuthGuardService] },
  { path: 'update-medicine/:id', component: UpdateMedicineComponent, canActivate: [DoctorAuthGuardService] },
  { path: 'login', component: LoginComponent }

];

bootstrapApplication(AppComponent, {
  ...appConfig, // Keep existing configurations
  providers: [
    provideHttpClient(),
    provideRouter(routes) // HttpClient provider remains here
  ],
})
  .catch((err) => console.error(err));
