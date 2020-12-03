package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.model.Manga;
import com.maval.MavAL.domain.model.Media;
import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.repository.AnimeRepository;
import com.maval.MavAL.domain.repository.MangaRepository;
import com.maval.MavAL.domain.repository.UserRepository;
import com.maval.MavAL.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

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

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/get_user_by_id")
    public Optional<User> getUserById(Integer id) {
        Optional<User> user = userRepository.findById(id);
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
        userService.addUserAnime(user, anime);
        //return ResponseEntity.ok().build();
    }
//    @CrossOrigin(origins = "http://localhost:3000")
//    @GetMapping(path="/api/get_user_by_username")
//    public void addUserFavourite(String username, Integer media_id, String media_type) {
//        User user = userRepository.findByUsername(username);
//        if(media_type.equals("anime")){
//            Optional<Anime> media = animeRepository.findById(media_id);
//            userService.addFavouriteMedia(user, media);
//        }
//        else if(media_type.equals("manga")){
//            Optional<Manga> media = mangaRepository.findById(media_id);
//            userService.addFavouriteMedia(user, media);
//        }
//    }
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @GetMapping(path="/api/get_user_favourites")
//    public Set<Media> getUserFavourites(String username) {
//        User user = userRepository.findByUsername(username);
//        Set<Media> favourites = user.favouriteMedia;
//        return favourites;
//    }
}
