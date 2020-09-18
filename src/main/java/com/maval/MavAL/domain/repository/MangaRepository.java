package com.maval.MavAL.domain.repository;

import com.maval.MavAL.domain.model.Manga;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MangaRepository extends JpaRepository<Manga, Integer> {}
