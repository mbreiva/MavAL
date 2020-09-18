package com.maval.MavAL.domain.service;

import com.maval.MavAL.domain.model.Media;
import com.maval.MavAL.domain.model.Manga;
import com.maval.MavAL.domain.repository.MangaRepository;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MangaService {
    @Autowired
    public MangaRepository mangaRepository;
    private static EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("MangaUnit");

    public List<Manga> getManga() {
        return mangaRepository.findAll();
    }

    public Manga findByTitle(String title) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();;
        CriteriaQuery<Manga> criteria = builder.createQuery(Manga.class);
        Root<Manga> manga = criteria.from(Manga.class);

        criteria.select(manga)
                .where(builder.equal(manga.get(Manga_.title), title));
        TypedQuery<Manga> typed = entityManager.createQuery(criteria);
        try {
            return typed.getSingleResult();
        }
        catch (final NoResultException nre) {
            return null;
        }
    }
}
