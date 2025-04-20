package com.app.hospitalmanagementsystem.Repository;

import com.app.hospitalmanagementsystem.Entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Long> {
}
