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

import com.capgemini.ehr.models.User;
import com.capgemini.ehr.repositories.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@GetMapping
	public List<User> list(){
		return userRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody User user) {
		try {
			userRepository.save(user);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@PutMapping
	@ResponseStatus(HttpStatus.OK)
	public void update(@RequestBody User user) {
		try {
			userRepository.save(user);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@GetMapping("/{userId}")
	public User get(@PathVariable("userId") Long userId) {
		return userRepository.getOne(userId);
	}
	
	//@PreAuthorize("hasAnyRole('ADMIN')")
	@DeleteMapping("/{userId}")
	public String delete(@PathVariable("userId") Long userId) {
		try {
			userRepository.deleteById(userId);
		} catch (Exception e) {
			return e.getMessage();
		}

	    return "";
	}

}