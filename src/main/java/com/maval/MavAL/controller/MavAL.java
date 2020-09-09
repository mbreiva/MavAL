package com.maval.MavAL.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MavAL {
    @RequestMapping("/")
    public String index() {
        return "MavAL";
    }
}
