package com.maval.MavAL.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class UserMedia {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="media_id")
    public Media media;

    public int mediaType;
    public boolean favourite = false;
    public double rating = 0.0;
    public int currentPosition = 0;



    public UserMedia() {}

    public UserMedia(User user, Media media){
        this.user = user;
        this.media = media;
        if(media instanceof Anime){
            mediaType = 1;
        }
        else if(media instanceof Manga){
            mediaType = 2;
        }
    }

    public int getId() {
        return id;
    }
}
