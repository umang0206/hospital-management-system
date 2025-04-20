import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-medicine',
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {

  medicine:Medicine= new Medicine();
  constructor(private medicineService:MedicineService, private router: Router) {}

  onSubmit(){
    if(this.medicine.drugName!=""){
      this.saveMedicine()
    }
    else{
      alert("Please enter Drug name")
    }
    
  }

 saveMedicine() {
    this.medicineService.createMedicine(this.medicine).subscribe(data=>{
      console.log(data);
      this.goToMedicine();
  })
  }

  goToMedicine(){
    this.router.navigate(["/medicinelist"])
  }


}
