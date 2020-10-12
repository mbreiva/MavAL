package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class LoginController {

    @Autowired
    public UserService userService;

    @GetMapping("/login")
    public String showLoginPage() { return "login";}

    @PostMapping(path="/login", consumes="application/x-www-form-urlencoded")
    public String loginUser (User user) {

        //Check if user exists
        //Check if password matches

        return "login";
    }
}
