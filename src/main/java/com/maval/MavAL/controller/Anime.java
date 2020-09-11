package com.maval.MavAL.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/anime")
public class Anime {
    @RequestMapping("/")
    public String index() {
        return "Anime";
    }
}
