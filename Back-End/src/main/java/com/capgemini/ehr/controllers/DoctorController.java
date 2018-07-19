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

@RestController
@RequestMapping("/doctor/{doctorId}")
public class DoctorController {

	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private PatientRepository patientRepository;
	
	@GetMapping
	public Optional<Doctor> getDoctor(@PathVariable("doctorId") long id){
		return doctorRepository.findById(id);
	}
	
	@GetMapping("/patients")
	public List<Patient> getPatients(@PathVariable("doctorId") long id){
		return this.doctorRepository.getOne(id).getPatients();
	}
	
	@GetMapping("/patients/{patientId}")
	public Patient getPatient(@PathVariable("doctorId") long docId, @PathVariable("patientId") long patId){
		Patient p = this.patientRepository.getOne(patId);
		Doctor d = this.doctorRepository.getOne(docId);
		if(d.getPatients().contains(p))
			return p;
		return null;
	}
	
	@GetMapping("/patients/all")
	public List<Patient> getAllPatients(){
		return patientRepository.findAll();
	}

}