package com.maval.MavAL.domain.model;

import java.util.HashSet;
import java.util.Set;

public class ProfileResponse {
    public User user;
    public Set<UserMedia> userMedia = new HashSet<>();

    public ProfileResponse() {};

}
