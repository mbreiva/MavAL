package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class AnimeService {

    @Autowired
    private AnimeRepository animeRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<Anime> findAll() {
        return animeRepository.findAll();
    }

    public List<Anime> findTopAnimeByIdLimited(int limit) {
        return entityManager.createQuery(
                "SELECT a FROM Anime a", Anime.class)
                .setMaxResults(limit)
                .getResultList();
    }

    public Anime findByTitle(String title) {
        return entityManager.createQuery(
                "SELECT a FROM Anime a WHERE a.title LIKE :animeTitle", Anime.class)
                .setParameter("animeTitle", title)
                .getSingleResult();
    }

    public List<Anime> findByStatus(String status) {
        return entityManager.createQuery(
                "SELECT a FROM Anime a WHERE a.status LIKE :animeStatus", Anime.class)
                .setParameter("animeStatus", status)
                .getResultList();
    }

}
