import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-view-patient',
  imports: [RouterModule],
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {
  id: number = 0;
  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data
    })
  }
}
