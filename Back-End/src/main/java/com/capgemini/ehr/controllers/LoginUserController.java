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

import com.capgemini.ehr.models.LoginUser;
import com.capgemini.ehr.repositories.LoginUserRepository;

@RestController
@RequestMapping("/api/v1/users")
public class LoginUserController {
	
	@Autowired
	private LoginUserRepository loginUserRepository;
	

	@GetMapping
	public List<LoginUser> list(){
		return loginUserRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody LoginUser loginUser) {
		try {
			loginUserRepository.save(loginUser);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@PutMapping
	@ResponseStatus(HttpStatus.OK)
	public void update(@RequestBody LoginUser loginUser) {
		try {
			loginUserRepository.save(loginUser);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@GetMapping("/{username}")
	public LoginUser get(@PathVariable("username") String username) {
		return loginUserRepository.getOne(username);
	}
	
	@DeleteMapping("/{username}")
	public String delete(@PathVariable("username") String username) {
		try {
			loginUserRepository.deleteById(username);
		} catch (Exception e) {
			return e.getMessage();
		}

	    return "";
	}

}