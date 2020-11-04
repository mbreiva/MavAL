package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.repository.AnimeRepository;
import com.maval.MavAL.domain.service.AnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

import java.util.List;

@Controller
@RequestMapping("/anime")
public class AnimeController {

    @Autowired
    public AnimeService animeService;

    @Autowired
    public AnimeRepository animeRepository;

    @GetMapping("/")
    public String getAllAnime(Model model) {
        List<Anime> animeList = animeRepository.findAll();
        model.addAttribute("animeList", animeList);
        return "anime_page";
    }

    @GetMapping(value={"/top-{limit}"})
    public String getTopAnime(Model model, @PathVariable int limit) {
        List<Anime> animeList = animeService.findTopAnimeByIdLimited(limit);
        model.addAttribute("animeList", animeList);
        return "anime_page";
    }

    @GetMapping(value={"/{title}"})
    public String getAnimeByTitle (Model model, @PathVariable String title) {
        Anime animeList = animeRepository.findByTitle(title);
        model.addAttribute("animeList", animeList);
        return "anime_page";
    }

    @GetMapping(value={"/{status}"})
    public String getAnimeByStatus (Model model, @PathVariable String status){
        List<Anime> animeList = animeRepository.findByStatus(status);
        model.addAttribute("animeList", animeList);
        return "anime_page";
    }
}
