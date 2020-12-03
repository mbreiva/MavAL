package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.*;
import com.maval.MavAL.domain.repository.AnimeRepository;
import com.maval.MavAL.domain.repository.MangaRepository;
import com.maval.MavAL.domain.repository.UserMediaRepository;
import com.maval.MavAL.domain.repository.UserRepository;
import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@RestController
public class UserRestController {

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public UserService userService;

    @Autowired
    public AnimeRepository animeRepository;

    @Autowired
    public MangaRepository mangaRepository;

    @Autowired
    public UserMediaRepository userMediaRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/get_user_by_id")
    public Optional<User> getUserById(Integer user_id) {
        Optional<User> user = userRepository.findById(user_id);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/get_user_by_username")
    public User getUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/add_user_anime")
    public void addUserAnime(String username, String title) {
        User user = userRepository.findByUsername(username);
        Anime anime = animeRepository.findByTitle(title);
        if(!userService.animeExistsInUserMedia(user, anime)){
            userService.addUserAnime(user, anime);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/add_media_to_favourites")
    public void addMediaToFavourites(String username, String title) {
        User user = userRepository.findByUsername(username);
        Anime anime = animeRepository.findByTitle(title);
        if(!userService.animeExistsInUserMedia(user, anime)){
            userService.addUserAnime(user, anime);
        }
        userService.addAnimeToFavourites(user, anime);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/get_user_media")
    public Set<UserMedia> getUserMedia(String username) {
        User user = userRepository.findByUsername(username);
        Set<UserMedia> userMedia = user.userMedia;
        return userMedia;
    }
}
