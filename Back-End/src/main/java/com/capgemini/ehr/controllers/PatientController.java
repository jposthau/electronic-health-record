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
import com.capgemini.ehr.repositories.UserRepository;
	
@RestController
@RequestMapping("/patient/{username}")
public class PatientController {
	
	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping
	public Optional<Patient> getPatient(@PathVariable("username") String username){
		return patientRepository.findByUser(userRepository.findByUsername(username).get());
	}
	
	@GetMapping("/doctor")
	public Doctor getDoctor(@PathVariable("username") String username){
		return patientRepository.findByUser(userRepository.findByUsername(username).get()).get().getDoctor();
	}

}