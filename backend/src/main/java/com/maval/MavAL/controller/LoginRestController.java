package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.AuthenticationToken;
import com.maval.MavAL.domain.model.LoginRequestDetails;
import com.maval.MavAL.domain.model.LoginResponse;
import com.maval.MavAL.domain.repository.UserRepository;
import com.maval.MavAL.domain.service.AuthenticationService;
import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginRestController {

    @Autowired
    public UserService userService;

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public AuthenticationService authenticationService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "api/authenticate", consumes = "application/json", produces = "application/json")
    // Returns booleans for each credential
    public LoginResponse authenticate(@RequestBody LoginRequestDetails credentials) {

        LoginResponse loginResponse = new LoginResponse();

        // Check if user exists based on username
        loginResponse.usernameValid = userService.userExistsByUsername(credentials.username);

        if(!loginResponse.usernameValid) {
            // TODO: Username does not exist error
            return loginResponse;
        }

        // Check if password given matches user's password
        loginResponse.passwordValid = userService.passwordValid(credentials.username, credentials.password);

        if(!loginResponse.passwordValid) {
            // TODO: Password invalid error
            return loginResponse;
        }

        loginResponse.userId = userRepository.findByUsername(credentials.username).getId();
        loginResponse.authToken.token = authenticationService.createJwtAuthenticationToken(credentials.username);
        return loginResponse;
    }
}
