package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.User;
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
        //Persist new user instance to database
        entityManager.persist(user);
    }

    public User loginUser(String username, String password) {
        return entityManager.createQuery("SELECT u FROM User u WHERE u.username = :username AND u.password = :password", User.class)
                .setParameter("username", username)
                .setParameter("password", password)
                .getSingleResult();
    }

    public boolean userExistsByUsername (String username) {
        return userRepository.findByUsername(username) == null;
    }

    public boolean userExistsByEmail (String email) {
        return userRepository.findByEmail(email) == null;
    }

    public boolean passwordMatch (String password) {
        //TODO: Check if password input matches user password
        return true;
    }
}
