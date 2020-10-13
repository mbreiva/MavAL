package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
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

    public void registerUser(User user) {
        //Persist new user instance to database
        entityManager.getTransaction().begin();
        entityManager.persist(user);
        entityManager.getTransaction().commit();
    }

    public User loginUser(String username, String password) {
        return entityManager.createQuery("SELECT u FROM User u WHERE u.username = :username AND u.password = :password", User.class)
                .setParameter("username", username)
                .setParameter("password", password)
                .getSingleResult();
    }

    public User findById (int id) {
        return entityManager.find(User.class, id);
    }

    public User findByEmail (String email) {
        List<User> users = entityManager.createQuery(
                "SELECT u from User u WHERE u.email = :userEmail", User.class)
                .setParameter("userEmail", email)
                .getResultList();
        return users.isEmpty() ? null : users.get(0);
    }

    public User findByUsername (String username) {
        List<User> users = entityManager.createQuery(
                "SELECT u from User u WHERE u.username = :username", User.class)
                .setParameter("username", username)
                .getResultList();
        return users.isEmpty() ? null : users.get(0);
    }

    public boolean userExistsByUsername (String username) {
        if(findByUsername(username) == null) {
            return false;
        }
        return true;
    }

    public boolean userExistsByEmail (String email) {
        if(findByEmail(email) == null) {
            return false;
        }
        return true;
    }
}
