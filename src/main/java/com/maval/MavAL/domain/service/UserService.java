package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public void registerUser(String name, String username, String password, String email) {
        User user = new User(name, username, password, email);
    }

    public void loginUser() {

    }

    public User findById (int id) {
        return entityManager.createQuery(
                "SELECT u FROM User u WHERE u.id LIKE :userId", User.class)
                .setParameter("userId", id)
                .getSingleResult();
    }

    public User findByEmail (String email) {
        return entityManager.createQuery(
                "SELECT u from User u WHERE u.email LIKE: userEmail", User.class)
                .setParameter("userEmail", email)
                .getSingleResult();
    }

    public User findByName (String name) {
        return entityManager.createQuery(
                "SELECT u from User u WHERE u.name LIKE: userName", User.class)
                .setParameter("userName", name)
                .getSingleResult();
    }

}
