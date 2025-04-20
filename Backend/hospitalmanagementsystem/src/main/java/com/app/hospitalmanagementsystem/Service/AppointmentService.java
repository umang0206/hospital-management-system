package com.app.hospitalmanagementsystem.Service;

import com.app.hospitalmanagementsystem.Entity.Appointment;
import com.app.hospitalmanagementsystem.Repository.AppointmentRepository;
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
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAllAppointment() {
        return appointmentRepository.findAll();
    }

    public Appointment getAppointmentById(long id) {
        return appointmentRepository.findById(id).orElseThrow(()->
                new ResponseStatusException(HttpStatus.NOT_FOUND,"Appointment id not found: " + id));
    }
    public Map<String, Boolean> deleteAppointment(long id) throws AttributeNotFoundException {
        Appointment appointment = appointmentRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Appointment not found with the Id: "+ id));
        Map<String, Boolean> response = new HashMap<String, Boolean>();
        if(appointment == null) {
            response.put("Deleted",Boolean.FALSE);
            return response;
        }
        appointmentRepository.delete(appointment);

        response.put("Deleted", Boolean.TRUE);
        return response;
    }

}
