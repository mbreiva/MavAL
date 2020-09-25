package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.model.Manga;
import com.maval.MavAL.domain.repository.MangaRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class MangaService {
    @Autowired
    private MangaRepository mangaRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<Manga> getManga() {
        return mangaRepository.findAll();
    }

    public List<Anime> findTopManga(int limit) {
        return entityManager.createQuery("SELECT a FROM Anime a", Anime.class)
                .setMaxResults(limit)
                .getResultList();
    }

    public List<Manga> findTopMangaByIdLimited(int limit) {
        return entityManager.createQuery(
                "SELECT a FROM Manga a", Manga.class)
                .setMaxResults(limit)
                .getResultList();
    }

    public Manga findByTitle(String title) {
        return entityManager.createQuery(
                "SELECT a FROM Manga a WHERE a.title LIKE :mangaTitle", Manga.class)
                .setParameter("mangaTitle", title)
                .getSingleResult();
    }

    public List<Manga> findByStatus(String status) {
        return entityManager.createQuery(
                "SELECT a FROM Manga a WHERE a.status LIKE :mangaStatus", Manga.class)
                .setParameter("mangaStatus", status)
                .getResultList();
    }
}
