package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.*;
import com.maval.MavAL.domain.repository.*;
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
    public UserMediaRepository userMediaRepository;

    @Autowired
    public MediaRepository mediaRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/get_user_by_id")
    public User getUserById(Integer user_id) {
        User user = userRepository.findById(user_id).get();
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/get_user_by_username")
    public User getUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        return user;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/add_user_media")
    public void addUserMedia(String username, Integer id) {
        User user = userRepository.findByUsername(username);
        Media media = mediaRepository.findById(id).get();
        if(!userService.mediaExistsInUserMedia(user, media)){
            userService.addUserMedia(user, media);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/change_favourite_status")
    public void changeFavouriteStatus(String username, Integer id, String favourite_status) {
        User user = userRepository.findByUsername(username);
        Media media = mediaRepository.findById(id).get();
        if(!userService.mediaExistsInUserMedia(user, media)){
            userService.addUserMedia(user, media);
        }
        userService.changeFavouriteStatus(user, media, favourite_status);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/get_user_profile_by_id")
    public ProfileResponse getUserProfileById(Integer user_id) {
        ProfileResponse profileResponse = new ProfileResponse();
        profileResponse.user = userRepository.findById(user_id).get();
        profileResponse.userAnime = userMediaRepository.findByUserAndMediaType(profileResponse.user, 1);
        profileResponse.userManga = userMediaRepository.findByUserAndMediaType(profileResponse.user, 2);
        profileResponse.favAnime = userMediaRepository.findByUserAndMediaTypeAndFavourite(profileResponse.user, 1, true);
        profileResponse.favManga = userMediaRepository.findByUserAndMediaTypeAndFavourite(profileResponse.user, 2, true);
        return profileResponse;
    }
}
