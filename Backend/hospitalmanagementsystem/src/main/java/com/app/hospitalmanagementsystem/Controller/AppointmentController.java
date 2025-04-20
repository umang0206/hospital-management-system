package com.app.hospitalmanagementsystem.Controller;

import com.app.hospitalmanagementsystem.Entity.Appointment;
import com.app.hospitalmanagementsystem.Service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.AttributeNotFoundException;
import java.util.List;
import java.util.Map;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/appointment")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping()
    public Appointment addAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @GetMapping()
    public List<Appointment> getAllAppointment(){
        return appointmentService.getAllAppointment();
    }

    @GetMapping("/{id}")
    public Appointment getAppointmentById(@PathVariable long id){
        return appointmentService.getAppointmentById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable long id) throws AttributeNotFoundException {
        Map<String, Boolean> response = appointmentService.deleteAppointment(id);
        return ResponseEntity.ok(response);
    }
}