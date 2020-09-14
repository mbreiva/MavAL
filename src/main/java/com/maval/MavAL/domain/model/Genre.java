package com.maval.MavAL.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Set;

@Entity
public class Genre {

    @Id
    @GeneratedValue
    public int id;
    public String name;

    @ManyToMany(mappedBy = "mediaGenre")
    Set<Media> media;

    public Genre(String name){
        this.name = name;
    }

}
