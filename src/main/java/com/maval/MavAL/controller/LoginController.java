package com.maval.MavAL.controller;

import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @Autowired
    public UserService userService;

    @GetMapping("/login")
    public String loginUser () {
        return "login";
    }
}
