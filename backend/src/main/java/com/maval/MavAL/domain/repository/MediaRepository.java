package com.maval.MavAL.domain.repository;

import com.maval.MavAL.domain.model.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MediaRepository extends JpaRepository<Media, Integer> {
    Media findByTitle(String title);
    List<Media> findByTitleContainingIgnoreCase(String keyword);
}