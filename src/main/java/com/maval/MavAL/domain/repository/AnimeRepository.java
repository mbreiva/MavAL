package com.maval.MavAL.domain.repository;

import com.maval.MavAL.domain.model.Anime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimeRepository extends JpaRepository<Anime, Integer> {}