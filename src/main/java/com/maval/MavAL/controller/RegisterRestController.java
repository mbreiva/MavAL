package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.RegisterRequestDetails;
import com.maval.MavAL.domain.model.RegisterResponse;
import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterRestController {

    @Autowired
    public UserService userService;

    @CrossOrigin(origins = "http://localhost:8000")
    @PostMapping(path = "api/register", consumes = "application/json", produces = "application/json")
    // Returns booleans for each credential
    public RegisterResponse registerNewUser(@RequestBody User user) {

        RegisterResponse registerInfoValid = new RegisterResponse();

        // Check if email already tied to existing account
        // TODO: Check if email is a valid address
        registerInfoValid.emailExists = userService.userExistsByEmail(user.getEmail());

        if(registerInfoValid.emailExists) {
            registerInfoValid.usernameExists = false;
            return registerInfoValid;
        }

        // Check if username already exists
        registerInfoValid.usernameExists = userService.userExistsByUsername(user.getUsername());

        if(!registerInfoValid.usernameExists){
            userService.registerUser(user);
        }
        return registerInfoValid;
    }
}
