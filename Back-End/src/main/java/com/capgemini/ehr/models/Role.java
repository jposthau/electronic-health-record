package com.capgemini.ehr.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="roles")
public class Role {
	
	public Role() {
		
	}
	
	public Role(Role role) {
		this.id = role.getId();
		this.role = role.getRole();
	}
	
	@Id
	@Column(name="role_id")
	Long id;
	
	@Column(name = "role")
	String role;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

}
