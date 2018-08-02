package com.capgemini.ehr.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capgemini.ehr.models.Doctor;
import com.capgemini.ehr.models.User;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
	
	Optional<Doctor> findByUser(User user);

}

