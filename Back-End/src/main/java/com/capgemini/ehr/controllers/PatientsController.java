package com.capgemini.ehr.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.ehr.models.Patient;
import com.capgemini.ehr.repositories.PatientRepository;
	
@RestController
@RequestMapping("/patients")
public class PatientsController {
	
	@Autowired
	private PatientRepository patientRepository;
	

	@GetMapping
	public List<Patient> list(){
		return patientRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody Patient patient) {
		patientRepository.save(patient);
	}
	
	@PutMapping
	@ResponseStatus(HttpStatus.OK)
	public void update(@RequestBody Patient patient) {
		try {
			patientRepository.save(patient);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@GetMapping("/{id}")
	public Patient get(@PathVariable("id") long id) {
		return patientRepository.getOne(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		try {
			patientRepository.delete(patientRepository.getOne(id));
		} catch (Exception e) {
			return e.getMessage();
		}

	    return "redirect:/patients";
	}

}