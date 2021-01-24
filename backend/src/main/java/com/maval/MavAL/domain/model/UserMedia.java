package com.maval.MavAL.domain.model;

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

    public int mediaTypeId;
    public boolean favourite = false;
    public double rating = 0.0;
    public int progress = 0;
    public String progressType ="";

    public UserMedia() {}

    public UserMedia(User user, Media media){
        this.user = user;
        this.media = media;
        if(media instanceof Anime){
            mediaTypeId = 1;
        }
        else if(media instanceof Manga){
            mediaTypeId = 2;
        }
    }

    public int getId() {
        return id;
    }
}
