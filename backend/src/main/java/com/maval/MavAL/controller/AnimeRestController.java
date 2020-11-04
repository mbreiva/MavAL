package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.repository.AnimeRepository;
import com.maval.MavAL.domain.service.AnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AnimeRestController {

    @Autowired
    public AnimeService animeService;

    @Autowired
    public AnimeRepository animeRepository;

    @CrossOrigin(origins = "http://localhost:8000")
    @GetMapping(path="api/get_anime")
    public List<Anime> getAnime(Integer limit, String status) {
        List<Anime> animeList = new ArrayList<Anime>();

        if(limit != null && limit > 0){
            animeList = animeService.findTopAnimeByIdLimited(limit);
        }

        if(status != null){
            animeList = animeRepository.findByStatus(status);
        }
        return animeList;
    }
}
