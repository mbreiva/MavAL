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

        boolean usernameValid = userService.userExistsByUsername(credentials.username);
        boolean passwordValid = userService.passwordValid(credentials.username, credentials.password);
        int id = -1;

        if(passwordValid) {
            id = userRepository.findByUsername(credentials.username).getId();
        }

        AuthenticationToken token = authenticationService.createJwtAuthenticationToken(credentials.username);

        LoginResponse loginResponse = new LoginResponse(usernameValid, passwordValid, id, token);
        return loginResponse;
    }
}
