package com.capgemini.ehr.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.ehr.models.Doctor;
import com.capgemini.ehr.models.Patient;
import com.capgemini.ehr.repositories.PatientRepository;
	
@RestController
@RequestMapping("/patient/{patientId}")
public class PatientController {
	
	@Autowired
	private PatientRepository patientRepository;
	
	@GetMapping
	public Optional<Patient> getPatient(@PathVariable("patientId") long id){
		return patientRepository.findById(id);
	}
	
	@GetMapping("/doctor")
	public Doctor getDoctors(@PathVariable("patientId") long id){
		return patientRepository.getOne(id).getDoctor();
	}

}