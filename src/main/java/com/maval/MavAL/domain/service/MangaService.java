package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Manga;
import com.maval.MavAL.domain.repository.MangaRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class MangaService {
    @Autowired
    private MangaRepository mangaRepository;

    public List<Manga> getManga() {
        return mangaRepository.findAll();
    }
}
