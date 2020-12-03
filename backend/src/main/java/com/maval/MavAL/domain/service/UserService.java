package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.model.Media;
import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.model.UserMedia;
import com.maval.MavAL.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Transactional
    public void registerUser(User user) {
        User newUser = new User(user.getName(), user.getEmail(), user.getUsername(), user.getPassword());
        //Persist new user instance to database
        entityManager.persist(newUser);
    }

    @Transactional
    public void addUserAnime(User user, Anime anime) {
        UserMedia userMedia = new UserMedia(user, anime);
        user.userMedia.add(userMedia);
        entityManager.persist(userMedia);
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
