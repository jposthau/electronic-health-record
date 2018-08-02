package com.capgemini.ehr.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capgemini.ehr.models.Patient;
import com.capgemini.ehr.models.User;

public interface PatientRepository extends JpaRepository<Patient, Long> {
	
	Optional<Patient> findByUser(User user);
	
}
