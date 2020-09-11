package com.maval.MavAL.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/manga")
public class Manga {
    @RequestMapping("/")
    public String index(){
        return "Manga";
    }
}
