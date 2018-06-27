package com.capgemini.ehr.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capgemini.ehr.models.LoginUser;

public interface LoginUserRepository extends JpaRepository<LoginUser, String> {

}
