package com.maval.MavAL.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MavAL {
    @RequestMapping("/")
    public String index() {
        return "index";
    }
}
