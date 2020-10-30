package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.LoginRequestDetails;
import com.maval.MavAL.domain.model.LoginUserResponse;
import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginRestController {

    @Autowired
    public UserService userService;

    @PostMapping(path = "api/authenticate", consumes = "application/json", produces = "application/json")
    // Returns booleans for each credential
    public LoginUserResponse authenticate(@RequestBody LoginRequestDetails credentials) {

        LoginUserResponse credentialsValid = new LoginUserResponse();

        // Check if user exists based on username
        credentialsValid.usernameValid = userService.userExistsByUsername(credentials.username);

        if(!credentialsValid.usernameValid) {
            credentialsValid.passwordValid = false;
            return credentialsValid;
        }

        // Check if password given matches user's password
        credentialsValid.passwordValid = userService.passwordValid(credentials.username, credentials.password);

        return credentialsValid;
    }
}
