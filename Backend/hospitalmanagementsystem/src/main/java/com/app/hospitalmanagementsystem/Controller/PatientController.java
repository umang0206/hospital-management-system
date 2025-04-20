package com.app.hospitalmanagementsystem.Controller;

import com.app.hospitalmanagementsystem.Entity.Patient;
import com.app.hospitalmanagementsystem.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    private PatientService patientService;

    @PostMapping()
    public Patient addPatient(@RequestBody Patient patient) {
        return patientService.addPatient(patient);
    }

    @GetMapping()
    public List<Patient> getAllPatient(){
        return patientService.getAllPatient();
    }

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable long id){
        return patientService.getPatientById(id);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable long id) throws AttributeNotFoundException {
        Map<String, Boolean> response = patientService.deletePatient(id);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/update-patient/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable long id, @RequestBody Patient patient) throws AttributeNotFoundException {
        return ResponseEntity.ok(patientService.updatePatientById(id, patient));
    }

}
