package com.maval.MavAL.domain.model;

import java.util.HashSet;
import java.util.Set;

public class ProfileResponse {
    public User user;
    public Set<UserMedia> userAnime = new HashSet<>();
    public Set<UserMedia> userManga = new HashSet<>();
    public Set<UserMedia> favAnime = new HashSet<>();
    public Set<UserMedia> favManga = new HashSet<>();

    public ProfileResponse() {};

}
