package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.model.Manga;
import com.maval.MavAL.domain.repository.MangaRepository;
import com.maval.MavAL.domain.service.MangaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class MangaRestController {

    @Autowired
    public MangaService mangaService;

    @Autowired
    public MangaRepository mangaRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="api/get_manga")
    public List<Manga> getManga(Integer limit, String status) {
        List<Manga> mangaList = new ArrayList<Manga>();

        if(limit != null && limit > 0){
            mangaList = mangaService.findTopMangaByIdLimited(limit);
        }

        if(status != null){
            mangaList = mangaRepository.findByStatus(status);
        }
        return mangaList;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="api/get_manga_by_id")
    public Optional<Manga> getMangaById(Integer id) {
        Optional<Manga> manga = mangaRepository.findById(id);
        return manga;
    }
}
