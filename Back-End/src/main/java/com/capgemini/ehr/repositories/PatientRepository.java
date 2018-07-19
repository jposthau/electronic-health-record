package com.capgemini.ehr.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capgemini.ehr.models.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
	
}
