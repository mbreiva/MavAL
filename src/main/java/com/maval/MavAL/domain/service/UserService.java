package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public void registerUser(String name, String username, String password, String email) {
        User user = new User(name, username, password, email);
    }

    public void loginUser() {

    }


}
