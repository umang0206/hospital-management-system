import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  imports: [FormsModule, RouterModule],
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
  id: number = 0;
  patient: Patient = new Patient();


  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data;
    })
  }
  onSubmit() {
    this.patientService.updatePatientDetails(this.patient, this.id).subscribe(data => {
      console.log(data);
      this.goToDocDash();
    })
  }

  goToDocDash() {
    this.router.navigate(['/docdash']);
  }

}
