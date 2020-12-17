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
        UserMedia userMedia = userMediaRepository.findByUserAndMedia(user,media);
        if(userMedia == null) {
            return false;
        }
        return true;
    }

    @Transactional
    public void addUserMedia(User user, Media media) {
        UserMedia userMedia = new UserMedia(user, media);
        entityManager.persist(userMedia);
    }

    @Transactional
    public void changeFavouriteStatus(User user, Media media, String newFavouriteStatus) {
        UserMedia userMedia = userMediaRepository.findByUserAndMedia(user, media);
        // Previously favourited
        if(newFavouriteStatus.equals("true")){
            userMedia.favourite = true;
        }
        else{
            userMedia.favourite = false;
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
    public void updateUserProgressType(User user, Media media, String user_progress_type) {
        UserMedia userMedia = userMediaRepository.findByUserAndMedia(user, media);
        userMedia.progressType = user_progress_type;
    }

}
