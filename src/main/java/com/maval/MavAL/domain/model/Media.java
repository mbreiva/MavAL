package com.maval.MavAL.domain.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name= "mediaType", discriminatorType = DiscriminatorType.INTEGER)
public class Media {

    @Id
    @GeneratedValue
    public int id;
    public String title;
    public String status;
    public Date releaseDate;

    public Media() {
    }

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

    public void setStatus() {
        this.status = status;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate() {
        this.releaseDate = releaseDate;
    }
}
