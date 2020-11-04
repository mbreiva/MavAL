package com.maval.MavAL.controller;

import com.maval.MavAL.domain.service.MangaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MangaRestController {

    @Autowired
    public MangaService mangaService;
}
