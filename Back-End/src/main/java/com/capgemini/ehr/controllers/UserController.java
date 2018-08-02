package com.capgemini.ehr.controllers;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.ehr.models.Role;
import com.capgemini.ehr.models.User;
import com.capgemini.ehr.models.UserRole;
import com.capgemini.ehr.repositories.RoleRepository;
import com.capgemini.ehr.repositories.UserRepository;
import com.capgemini.ehr.repositories.UserRoleRepository;

@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private UserRoleRepository userRoleRepository;
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@GetMapping
	public List<User> list(){
		return userRepository.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.OK)
	public void create(@RequestBody String request) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		JSONObject userObj = null;
		User user = new User();
		UserRole userRole = new UserRole();
		
		String roles = "{"+request.substring(request.indexOf("role")-1, request.length()-1);
		String role = roles.substring(roles.indexOf("[")+10, roles.length()-2);
		
		try {
			userObj = new JSONObject(request.substring(0, request.indexOf("roles")-2)+'}');
		} catch (JSONException e1) {
			System.out.println("1");
			e1.getMessage();
		}
		try {
			user.setUsername(userObj.getString("username"));
			user.setPassword(userObj.getString("password"));
		} catch (JSONException e) {
			System.out.println("3");
			e.getMessage();
		}
		userRole.setRoleId(roleRepository.findByRole(role).getId());
		String tmp = user.getPassword();
		user.setPassword(encoder.encode(tmp));
		user.setActive(true);
		try {
			userRepository.save(user);
			userRole.setUserId(user.getId());
			//System.out.println(user.getId());
			userRoleRepository.save(userRole);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@PutMapping
	@ResponseStatus(HttpStatus.OK)
	public void update(@RequestBody User user) {
		try {
			userRepository.save(user);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@GetMapping("/{userId}")
	public User get(@PathVariable("userId") Long userId) {
		return userRepository.getOne(userId);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN')")
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