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
    public void changeFavouriteStatus(String username, Integer media_id, String new_favourite_status) {
        User user = userRepository.findByUsername(username);
        Media media = mediaRepository.findById(media_id).get();
        if(!userMediaService.mediaExistsInUserMedia(user, media)){
            userMediaService.addUserMedia(user, media);
        }
        userMediaService.changeFavouriteStatus(user, media, new_favourite_status);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/api/get_user_profile_by_id")
    public ProfileResponse getUserProfileById(Integer user_id) {
        ProfileResponse profileResponse = new ProfileResponse();
        User user = userRepository.findById(user_id).get();
        profileResponse.user = user;
        profileResponse.userAnime = userMediaRepository.findByUserAndMediaType(user, 1);
        profileResponse.userManga = userMediaRepository.findByUserAndMediaType(user, 2);
        profileResponse.favAnime = userMediaRepository.findByUserAndMediaTypeAndFavourite(user, 1, true);
        profileResponse.favManga = userMediaRepository.findByUserAndMediaTypeAndFavourite(user, 2, true);
        profileResponse.currentlyWatchingAnime = userMediaRepository.findByUserAndMediaTypeAndProgressType(user, 1, "Currently Watching");
        profileResponse.currentlyReadingManga = userMediaRepository.findByUserAndMediaTypeAndProgressType(user, 2, "Currently Reading");
        profileResponse.completedAnime = userMediaRepository.findByUserAndMediaTypeAndProgressType(user, 1, "Completed");
        profileResponse.completedManga = userMediaRepository.findByUserAndMediaTypeAndProgressType(user, 2, "Completed");
        profileResponse.onHoldAnime = userMediaRepository.findByUserAndMediaTypeAndProgressType(user, 1, "On Hold");
        profileResponse.onHoldManga = userMediaRepository.findByUserAndMediaTypeAndProgressType(user, 2, "On Hold");
        profileResponse.droppedAnime = userMediaRepository.findByUserAndMediaTypeAndProgressType(user, 1, "Dropped");
        profileResponse.droppedManga = userMediaRepository.findByUserAndMediaTypeAndProgressType(user, 2, "Dropped");
        profileResponse.savedAnime = userMediaRepository.findByUserAndMediaTypeAndProgressType(user, 1, "Saved for Later");
        profileResponse.savedManga = userMediaRepository.findByUserAndMediaTypeAndProgressType(user, 2, "Saved for Later");
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
    public void updateUserProgressType(String username, Integer media_id, String user_progress_type) {
        User user = userRepository.findByUsername(username);
        Media media = mediaRepository.findById(media_id).get();
        if(!userMediaService.mediaExistsInUserMedia(user, media)) {
            userMediaService.addUserMedia(user, media);
        }
        userMediaService.updateUserProgressType(user, media, user_progress_type);
    }
}
