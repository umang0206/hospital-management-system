import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-medicinelist',
  imports: [CommonModule, RouterModule],
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {
  medicines: Medicine[] = [];

  constructor(private medicineService: MedicineService, private route: ActivatedRoute, private router: Router, private loginService: LoginserviceService) { }

  ngOnInit(): void {
    this.getMedicine()
  }
  getMedicine() {
    this.medicineService.getMedicineList().subscribe(data => {
      this.medicines = data;
    })
  }
  update(id: number) {
    this.router.navigate(['/update-medicine', id])
  }

  deleteMedcine(id: number) {
    this.medicineService.deleteMedicineById(id).subscribe(data => {
      console.log(data);
      this.getMedicine();
    })
  }

  goToViewMedicine() {
    this.router.navigate(['/medicinelist'])
  }
  userLogout() {
    this.loginService.logoutDoctorUser();
    this.router.navigate(['home'])

  }

}
