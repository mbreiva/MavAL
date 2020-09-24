package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.service.MangaService;
import com.maval.MavAL.domain.model.Manga;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequestMapping("/manga")
public class MangaController {

    @Autowired
    public MangaService mangaService;

    @RequestMapping("/all")
    public String showManga(Model model){
        List<Manga> manga = mangaService.getManga();
        model.addAttribute("manga", manga);
        return "manga_page";
    }

    @RequestMapping(value={"", "/"})
    public String showTopAnime(Model model) {
        int limit = 20;
        List<Anime> animeList = mangaService.findTopManga(limit);
        model.addAttribute("animeList", animeList);
        return "anime_page";
    }
}
