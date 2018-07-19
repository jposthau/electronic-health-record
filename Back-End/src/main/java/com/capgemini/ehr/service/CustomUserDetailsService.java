package com.capgemini.ehr.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.capgemini.ehr.models.CustomUserDetails;
import com.capgemini.ehr.models.User;
import com.capgemini.ehr.repositories.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> optionalUser = userRepository.findByUsername(username);
		optionalUser.orElseThrow(() -> new UsernameNotFoundException("Username not found"));
		return optionalUser.map(CustomUserDetails::new).get();
	}	
	
	public List<User> getAllUsers() {
		List<User> users = new ArrayList<User>();
		Iterator<User> itr = userRepository.findAll().iterator();
		while(itr.hasNext()) {
			users.add(itr.next());
		}
		return users;
	}
	
}
