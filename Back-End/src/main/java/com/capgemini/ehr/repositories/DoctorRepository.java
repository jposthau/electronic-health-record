package com.capgemini.ehr.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capgemini.ehr.models.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}

