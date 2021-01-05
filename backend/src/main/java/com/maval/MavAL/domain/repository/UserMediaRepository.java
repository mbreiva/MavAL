package com.maval.MavAL.domain.repository;

import com.maval.MavAL.domain.model.Media;
import com.maval.MavAL.domain.model.User;
import com.maval.MavAL.domain.model.UserMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface UserMediaRepository extends JpaRepository<UserMedia, Integer> {
    UserMedia findByUserAndMedia(User user, Media media);
    Set<UserMedia> findByUser(User user);
}

