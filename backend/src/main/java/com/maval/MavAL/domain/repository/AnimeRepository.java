package com.maval.MavAL.domain.repository;

import com.maval.MavAL.domain.model.Anime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Integer> {
    Anime findByTitle(String title);
    List<Anime> findByStatus(String status);
    List<Anime> findByStudio(String studio);
}