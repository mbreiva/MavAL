package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.Media;
import com.maval.MavAL.domain.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MediaRestController {

    @Autowired
    public MediaRepository mediaRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/searchMediaByTitle")
    public List<Media> searchMediaByTitle(String keyword) {
        List<Media> results = mediaRepository.findByTitleContainingIgnoreCase(keyword);
        return results;
    }
}
