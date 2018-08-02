package com.capgemini.ehr.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="users_roles")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UserRole {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="user_role_id")
	private Long id;
	
	@Column(name="user_id")
	private Long userId;
	
	@Column(name="role_id")
	private Long roleId;
	
	public UserRole() {
		
	}
	
	public UserRole(Long roleId, Long userId) {
		this.roleId = roleId;
		this.userId = userId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getRoleId() {
		return roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}
	
	
}
