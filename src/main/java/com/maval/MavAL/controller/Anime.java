package com.maval.MavAL.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/anime")
public class Anime {
    @RequestMapping(value={"", "/"})
    public String index() {
        return "Anime";
    }

    @RequestMapping("test")
    public String test() {
        return "Testing, testing";
    }
}
