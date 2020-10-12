package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;

@Controller
public class RegisterController {

    @Autowired
    private UserService userService;

    @Autowired
    private EntityManager entityManager;

    @GetMapping("/register")
    public String showRegistrationPage(){
        return "register_new_user";
    }

    @PostMapping(path="/register", consumes="application/x-www-form-urlencoded")
    public String registerUser(User user) {

        //Check if username is taken

        //Check if email tied to an existing account

        //Persist new user instance to database
        entityManager.getTransaction().begin();
        entityManager.persist(user);
        entityManager.getTransaction().commit();

        return "redirect:/register?success";
    }
}
