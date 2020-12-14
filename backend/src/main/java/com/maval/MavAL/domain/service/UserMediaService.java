package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Media;
import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.model.UserMedia;
import com.maval.MavAL.domain.repository.UserMediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
public class UserMediaService {

    @Autowired
    private UserMediaRepository userMediaRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public boolean mediaExistsInUserMedia(User user, Media media) {
        // TODO: Check if user already has relation to anime
        boolean mediaExists = user.userMedia.stream().anyMatch(o -> o.media == media);
        return mediaExists;
    }

    @Transactional
    public void addUserMedia(User user, Media media) {
        UserMedia userMedia = new UserMedia(user, media);
        user.userMedia.add(userMedia);
        entityManager.persist(userMedia);
    }

    @Transactional
    public void changeFavouriteStatus(User user, Media media, String prevFavouriteStatus) {
        UserMedia userMedia = userMediaRepository.findByUserAndMedia(user, media);
        // Previously favourited
        if(prevFavouriteStatus.equals("true")){
            userMedia.favourite = false;
        }
        else{
            userMedia.favourite = true;
        }
    }

    @Transactional
    public void updateUserProgress(User user, Media media, Integer user_progress) {
        UserMedia userMedia = userMediaRepository.findByUserAndMedia(user, media);
        userMedia.progress = user_progress;
    }

    @Transactional
    public void updateUserRating(User user, Media media, Integer rating) {
        UserMedia userMedia = userMediaRepository.findByUserAndMedia(user, media);
        userMedia.rating = rating;
    }

    @Transactional
    public void updateUserProgressType(User user, Media media, String progress_type) {
        UserMedia userMedia = userMediaRepository.findByUserAndMedia(user, media);
        userMedia.progressType = progress_type;
    }

}
