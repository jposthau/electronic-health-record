package com.capgemini.ehr.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.ehr.models.Doctor;
import com.capgemini.ehr.models.Patient;
import com.capgemini.ehr.repositories.DoctorRepository;
import com.capgemini.ehr.repositories.PatientRepository;
import com.capgemini.ehr.repositories.UserRepository;

@RestController
@RequestMapping("/doctor/{username}")
public class DoctorController {

	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping
	public Optional<Doctor> getDoctor(@PathVariable("username") String username){
		return doctorRepository.findByUser(userRepo.findByUsername(username).get());
	}
	
	@GetMapping("/patients")
	public List<Patient> getPatients(@PathVariable("username") String username){
		return this.doctorRepository.findByUser(userRepo.findByUsername(username).get()).get().getPatients();
	}
	
	@GetMapping("/patients/{patientId}")
	public Patient getPatient(@PathVariable("username") String username, @PathVariable("patientId") long patId){
		Patient p = this.patientRepository.getOne(patId);
		Doctor d = this.doctorRepository.findByUser(userRepo.findByUsername(username).get()).get();
		if(d.getPatients().contains(p))
			return p;
		return null;
	}
	
	@GetMapping("/patients/all")
	public List<Patient> getAllPatients(){
		return patientRepository.findAll();
	}

}