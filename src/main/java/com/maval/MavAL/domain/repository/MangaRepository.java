package com.maval.MavAL.domain.repository;

import com.maval.MavAL.domain.model.Manga;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MangaRepository extends JpaRepository<Manga, Integer> {
    Manga findByTitle(String title);
    List<Manga> findByStatus(String status);
    List<Manga> findByAuthor(String author);
    List<Manga> findByArtist(String artist);
}
