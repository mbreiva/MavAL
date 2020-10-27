package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class RegisterController {

    @Autowired
    private UserService userService;

    @GetMapping("/register")
    public String showRegistrationPage(){
        return "register_new_user";
    }

    @PostMapping(path="/register", consumes="application/x-www-form-urlencoded")
    public String registerUser(User user) {

        //Check if username is taken
        if(userService.userExistsByUsername(user.getUsername()) == true){
            return "redirect:/register";
        }
        //Check if email tied to an existing account
        if(userService.userExistsByEmail(user.getEmail()) == true) {
            return "redirect:/register";
        }
        //Persist new user instance to database
        userService.registerUser(user);

        // TODO: Redirect page after registration success
        return "redirect:/register?success";
    }
}
