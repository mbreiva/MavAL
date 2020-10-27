package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {

    @Autowired
    public UserService userService;

    @GetMapping("/login")
    public String showLoginPage() { return "login";}

    @PostMapping(path="/login", consumes="application/x-www-form-urlencoded")
    public String loginUser (User user) {

        // TODO: Check if user exists
        if(userService.userExistsByUsername(user.getUsername()) == false) {
            return "redirect:/login";
        }
        // TODO: Check if password matches
        if(userService.passwordMatch(user.getPassword()) == false) {
            return "redirect:/login";
        }

        // TODO: Redirect page after login success
        return "redirect:/login?success";
    }
}
