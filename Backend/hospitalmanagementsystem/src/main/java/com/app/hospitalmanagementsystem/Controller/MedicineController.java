package com.app.hospitalmanagementsystem.Controller;

import com.app.hospitalmanagementsystem.Entity.Medicine;
import com.app.hospitalmanagementsystem.Entity.Patient;
import com.app.hospitalmanagementsystem.Service.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/medicine")
public class MedicineController {
    @Autowired
    private MedicineService medicineService;

    @PostMapping()
    public Medicine addMedicine(@RequestBody Medicine medicine) {
        return medicineService.createAppointment(medicine);
    }

    @GetMapping()
    public List<Medicine> getAllMedicine(){
        return medicineService.getAllMedicine();
    }

    @GetMapping("/{id}")
    public Medicine getMedicineById(@PathVariable long id){
        return medicineService.getMedicineById(id);
    }
    @PutMapping("/update-medicine/{id}")
    public ResponseEntity<Medicine> updateMedicine(@PathVariable long id, @RequestBody Medicine medicine) throws AttributeNotFoundException {
        return ResponseEntity.ok(medicineService.updateMedicineById(id, medicine));
    }

    @DeleteMapping("/{id}")
    public Map<String,Boolean> deleteMedicineById(@PathVariable long id) throws AttributeNotFoundException {
        return medicineService.deletedMedicineById(id);
    }
}


