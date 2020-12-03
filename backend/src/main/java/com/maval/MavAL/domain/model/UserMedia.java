package com.maval.MavAL.domain.model;

import javax.persistence.*;

@Entity
public class UserMedia {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name="anime_id")
    public Anime anime;

    public boolean favourite = false;
    public double rating = 0.0;
    public int episode = 0;
    public int chapter = 0;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    public UserMedia() {}

    public UserMedia(User user, Anime anime){
        this.user = user;
        this.anime = anime;
    }

    public int getId() {
        return id;
    }
}
