package com.maval.MavAL.domain.model;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name= "media_type_id", discriminatorType = DiscriminatorType.INTEGER)
public class Media {

    @Id
    /**
        using identity has a performance impact on entity creation when using hibernate bc it
        forces the a db call to create the entity (since it requires pk)
        
        this is fine for us bc we don't will mostly be importing data directly from csv files
     */

    @GeneratedValue(strategy=GenerationType.IDENTITY)
    public int id;
    public String title;
    public String status;
    public Date releaseDate;

    @Column(name="media_type_id", insertable = false, updatable = false)
    protected int mediaTypeId;

//    @ManyToMany(mappedBy = "favouriteMedia")
//    Set<User> favourites = new HashSet<>();
//
//    @ManyToMany(mappedBy = "mediaProgress")
//    Set<User> userProgress = new HashSet<>();
//
//    @ManyToMany
//    Set<Genre> mediaGenre = new HashSet<>();

    public Media() {}

    public Media(String title, String status, Date releaseDate) {
        this.title = title;
        this.status = status;
        this.releaseDate = releaseDate;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public int getMediaTypeId() {
        return mediaTypeId;
    }
}
