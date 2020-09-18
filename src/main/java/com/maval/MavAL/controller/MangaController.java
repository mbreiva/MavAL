package com.maval.MavAL.controller;

import com.maval.MavAL.domain.service.MangaService;
import com.maval.MavAL.domain.model.Manga;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/manga")
public class MangaController {
    @Autowired
    public MangaService mangaService;

    @RequestMapping("/")
    public List<Manga> index(){
        return mangaService.getManga();
    }


}
