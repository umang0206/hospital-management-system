package com.app.hospitalmanagementsystem.Repository;

import com.app.hospitalmanagementsystem.Entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine,Long> {
}
