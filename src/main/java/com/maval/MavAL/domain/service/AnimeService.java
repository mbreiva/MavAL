package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.repository.AnimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

@Service
public class AnimeService {

    @Autowired
    private AnimeRepository animeRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<Anime> findTopAnimeByIdLimited(int limit) {
        return entityManager.createQuery(
                "SELECT a FROM Anime a", Anime.class)
                .setMaxResults(limit)
                .getResultList();
    }

}
