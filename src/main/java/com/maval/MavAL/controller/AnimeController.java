package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.service.AnimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

import java.util.List;

@Controller
@RequestMapping("/anime")
public class AnimeController {

    @Autowired
    public AnimeService animeService;

    @RequestMapping(value={"", "/"})
    public String showAnime(Model model) {
        List<Anime> anime = animeService.getAnime();
        model.addAttribute("anime", anime);
        return "anime_page";
    }

}
