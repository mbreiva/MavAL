package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {

    @Autowired
    public UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:8000")
    @GetMapping("/api/get_profile")
    public User getUserProfile(String username){

        User user = userRepository.findByUsername(username);

        return user;
    }
}
