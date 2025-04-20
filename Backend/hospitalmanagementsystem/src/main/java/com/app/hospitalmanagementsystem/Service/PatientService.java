package com.app.hospitalmanagementsystem.Service;

import com.app.hospitalmanagementsystem.Entity.Appointment;
import com.app.hospitalmanagementsystem.Entity.Patient;
import com.app.hospitalmanagementsystem.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.management.AttributeNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PatientService {
    @Autowired
    private PatientRepository patientRepository;

    public Patient addPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public List<Patient> getAllPatient() {
        return patientRepository.findAll();
    }

    public Patient getPatientById(Long id) {
        return patientRepository.findById(id).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "patient id not found" + id));
    }
    public Map<String, Boolean> deletePatient(long id) throws AttributeNotFoundException {
        Patient patient = patientRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Appointment not found with the Id: "+ id));
        Map<String, Boolean> response = new HashMap<String, Boolean>();
        if(patient == null) {
            response.put("Deleted",Boolean.FALSE);
            return response;
        }
        patientRepository.delete(patient);

        response.put("Deleted", Boolean.TRUE);
        return response;
    }

    public Patient updatePatientById(long id, Patient newPatientDetails) throws AttributeNotFoundException {
        Patient patient= patientRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Patient id not found with id: "+ id));

        if(newPatientDetails.getAge() != null){
            patient.setAge(newPatientDetails.getAge());
        }
        if(newPatientDetails.getName() != null){
            patient.setName(newPatientDetails.getName());
        }
        if(newPatientDetails.getBlood() != null){
            patient.setBlood(newPatientDetails.getBlood());
        }
        if(newPatientDetails.getDose() != null){
            patient.setDose(newPatientDetails.getDose());
        }
        if(newPatientDetails.getFees() != null){
            patient.setFees(newPatientDetails.getFees());
        }
        if(newPatientDetails.getUrgency() != null){
            patient.setUrgency(newPatientDetails.getUrgency());
        }
        if(newPatientDetails.getPrescription() != null){
            patient.setPrescription(newPatientDetails.getPrescription());
        }

        return patientRepository.save(patient);

    }

}
