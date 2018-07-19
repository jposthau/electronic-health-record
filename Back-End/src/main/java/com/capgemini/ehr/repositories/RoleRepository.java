package com.capgemini.ehr.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capgemini.ehr.models.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	public Role findByRole(String role);
}
