package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AnimeService {
    @Autowired
    private AnimeRepository animeRepository;

    public List<Anime> getAnime() {
        return animeRepository.findAll();
    }
}
