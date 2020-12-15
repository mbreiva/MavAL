package com.maval.MavAL.controller;

import com.maval.MavAL.domain.model.Media;
import com.maval.MavAL.domain.model.ProfileResponse;
import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.repository.MediaRepository;
import com.maval.MavAL.domain.repository.UserMediaRepository;
import com.maval.MavAL.domain.repository.UserRepository;
import com.maval.MavAL.domain.service.UserMediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserMediaRestController {

    @Autowired
    public UserMediaService userMediaService;

    @Autowired
    public UserMediaRepository userMediaRepository;

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public MediaRepository mediaRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/add_user_media")
    public void addUserMedia(String username, Integer id) {
        User user = userRepository.findByUsername(username);
        Media media = mediaRepository.findById(id).get();
        if(!userMediaService.mediaExistsInUserMedia(user, media)){
            userMediaService.addUserMedia(user, media);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/change_favourite_status")
    public void changeFavouriteStatus(String username, Integer media_id, String favourite_status) {
        User user = userRepository.findByUsername(username);
        Media media = mediaRepository.findById(media_id).get();
        if(!userMediaService.mediaExistsInUserMedia(user, media)){
            userMediaService.addUserMedia(user, media);
        }
        userMediaService.changeFavouriteStatus(user, media, favourite_status);
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

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="api/update_user_progress")
    public void updateUserProgress(String username, Integer media_id, Integer user_progress) {
        User user = userRepository.findByUsername(username);
        Media media = mediaRepository.findById(media_id).get();
        if(!userMediaService.mediaExistsInUserMedia(user, media)) {
            userMediaService.addUserMedia(user, media);
        }
        userMediaService.updateUserProgress(user, media, user_progress);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="api/update_user_rating")
    public void updateUserRating(String username, Integer media_id, Integer user_rating) {
        User user = userRepository.findByUsername(username);
        Media media = mediaRepository.findById(media_id).get();
        if(!userMediaService.mediaExistsInUserMedia(user, media)) {
            userMediaService.addUserMedia(user, media);
        }
        userMediaService.updateUserRating(user, media, user_rating);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="api/update_user_progress_type")
    public void updateUserProgressType(String username, Integer media_id, String progress_type) {
        User user = userRepository.findByUsername(username);
        Media media = mediaRepository.findById(media_id).get();
        if(!userMediaService.mediaExistsInUserMedia(user, media)) {
            userMediaService.addUserMedia(user, media);
        }
        userMediaService.updateUserProgressType(user, media, progress_type);
    }
}
