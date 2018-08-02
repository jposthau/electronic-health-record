package com.capgemini.ehr.service;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

@Component
public class Guard {
	
	public boolean checkUsername(Authentication authentication, String username) {
		boolean result = username.equals(authentication.getName());
		System.out.println(result);
		return result;		
	}
	
}
