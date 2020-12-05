package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.*;
import com.maval.MavAL.domain.repository.UserMediaRepository;
import com.maval.MavAL.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMediaRepository userMediaRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Transactional
    public void registerUser(User user) {
        User newUser = new User(user.getEmail(), user.getUsername(), user.getPassword());
        //Persist new user instance to database
        entityManager.persist(newUser);
    }

    @Transactional
    public void addUserMedia(User user, Media media) {
        UserMedia userMedia = new UserMedia(user, media);
        user.userMedia.add(userMedia);
        entityManager.persist(userMedia);
    }

    @Transactional
    public void addMediaToFavourites(User user, Media media) {
        UserMedia userMedia = userMediaRepository.findByUserAndMedia(user, media);
        userMedia.favourite = true;
    }

    public boolean mediaExistsInUserMedia(User user, Media media) {
        // TODO: Check if user already has relation to anime
        boolean mediaExists = user.userMedia.stream().anyMatch(o -> o.media == media);
        return mediaExists;
    }

    public boolean userExistsByUsername (String username) {
        return userRepository.findByUsername(username) != null;
    }

    public boolean userExistsByEmail (String email) {
        return userRepository.findByEmail(email) != null;
    }

    public boolean passwordValid (String username, String password) {
        //TODO: Check if password input matches user password
        User user = userRepository.findByUsername(username);
        return user.getPassword().equals(password);
    }
}
