package com.maval.MavAL.domain.repository;

import com.maval.MavAL.domain.model.Anime;
import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.model.UserMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMediaRepository extends JpaRepository<UserMedia, Integer> {
    UserMedia findByUserAndAnime(User user, Anime anime);
}

