package com.app.hospitalmanagementsystem.Service;

import com.app.hospitalmanagementsystem.Entity.Appointment;
import com.app.hospitalmanagementsystem.Entity.Medicine;
import com.app.hospitalmanagementsystem.Entity.Patient;
import com.app.hospitalmanagementsystem.Repository.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MedicineService {
    @Autowired
    private MedicineRepository medicineRepository;

    public Medicine createAppointment(Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    public List<Medicine> getAllMedicine() {
        return medicineRepository.findAll();
    }

    public Medicine getMedicineById(long id) {
        return medicineRepository.findById(id).orElseThrow(()->
                new ResponseStatusException(HttpStatus.NOT_FOUND,"Medicine id not found: " + id));
    }


    public Medicine updateMedicineById(long id, Medicine newMedicineDetails) throws AttributeNotFoundException {
        Medicine medicine= medicineRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine id not found with id: "+ id));

        medicine.setDrugName(newMedicineDetails.getDrugName());
        medicine.setStock(newMedicineDetails.getStock());


        return medicineRepository.save(medicine);

    }
    public Map<String, Boolean> deletedMedicineById(long id) throws AttributeNotFoundException {
        Medicine medicine = medicineRepository.findById(id).orElseThrow(()->
                new AttributeNotFoundException("Medicine is not found with id:" + id));

        medicineRepository.delete(medicine);
        HashMap<String, Boolean> response = new HashMap<String,Boolean>();
        response.put("Deleted",Boolean.TRUE);
        return response;
    }

}
