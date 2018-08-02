package com.capgemini.ehr.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capgemini.ehr.models.UserRole;

public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
	Optional<UserRole> findByUserId(Long userId);

}