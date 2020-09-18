package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Manga;
import com.maval.MavAL.domain.repository.MangaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MangaService {
    @Autowired
    public MangaRepository mangaRepository;

    public List<Manga> getManga() {
        return mangaRepository.findAll();
    }
}
