package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.repository.UserRepository;
import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class ProfileRestController {

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public UserService userService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/get_user_by_id")
    public Optional<User> getUserById(Integer id) {
        Optional<User> user = userRepository.findById(id);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/get_user_by_username")
    public User getUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        return user;
    }
}
