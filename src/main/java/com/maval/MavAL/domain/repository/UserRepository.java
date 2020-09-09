package com.maval.MavAL.domain.repository;


import com.maval.MavAL.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {}
