import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-update-medicine',
  imports: [FormsModule, RouterModule],
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {


  id: number = 0;
  medicine: Medicine = new Medicine();
  constructor(private medicineService: MedicineService, private route: ActivatedRoute, private router: Router, private loginService: LoginserviceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data => {
      this.medicine = data;
    })
  }
  onSubmit() {
    this.medicineService.updateMedicine(this.medicine, this.id).subscribe(data => {
      console.log(data);
      this.goToMedicineList();
    })
  }
  goToMedicineList() {
    this.router.navigate(['/medicinelist'])
  }
  docLogout() {
    this.loginService.logoutDoctorUser();
    this.router.navigate(['home'])

  }
}
