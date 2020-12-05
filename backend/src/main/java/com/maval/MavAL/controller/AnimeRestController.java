package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.repository.AnimeRepository;
import com.maval.MavAL.domain.service.AnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class AnimeRestController {

    @Autowired
    public AnimeService animeService;

    @Autowired
    public AnimeRepository animeRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "api/get_anime")
    public List<Anime> getAnime() {
        List<Anime> animeList = animeRepository.findAll();
        return animeList;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "api/get_anime_by_status_limited")
    public List<Anime> getAnimeByStatusLimited(Integer limit, String status) {
        List<Anime> animeList = new ArrayList<Anime>();

        if(limit != null && limit > 0){
            animeList = animeService.findTopAnimeByIdLimited(limit);
        }

        if(status != null){
            animeList = animeRepository.findByStatus(status);
        }
        return animeList;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "api/get_anime_by_id")
    public Optional<Anime> getAnimeById(Integer id) {
        Optional<Anime> anime = animeRepository.findById(id);
        return anime;
    }
}
