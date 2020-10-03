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

    public List<Manga> findAll() {
        return mangaRepository.findAll();
    }

    public List<Manga> findTopMangaByIdLimited(int limit) {
        return entityManager.createQuery(
                "SELECT m FROM Manga m", Manga.class)
                .setMaxResults(limit)
                .getResultList();
    }

    public Manga findByTitle(String title) {
        return entityManager.createQuery(
                "SELECT m FROM Manga m WHERE m.title = :mangaTitle", Manga.class)
                .setParameter("mangaTitle", title)
                .getSingleResult();
    }

    public Manga findById(int id) {
        return entityManager.createQuery(
                "SELECT m FROM Manga m WHERE m.id = :mangaId", Manga.class)
                .setParameter("mangaId", id)
                .getSingleResult();
    }

    public List<Manga> findByStatus(String status) {
        return entityManager.createQuery(
                "SELECT m FROM Manga m WHERE m.status = :mangaStatus", Manga.class)
                .setParameter("mangaStatus", status)
                .getResultList();
    }
}
