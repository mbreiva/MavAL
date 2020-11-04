package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.model.Manga;
import com.maval.MavAL.domain.repository.MangaRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Optional;

@Service
public class MangaService {
    @Autowired
    private MangaRepository mangaRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<Manga> findTopMangaByIdLimited(int limit) {
        return entityManager.createQuery(
                "SELECT m FROM Manga m", Manga.class)
                .setMaxResults(limit)
                .getResultList();
    }
}
