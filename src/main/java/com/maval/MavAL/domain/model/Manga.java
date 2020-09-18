package com.maval.MavAL.domain.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.util.Date;

@Entity
@DiscriminatorValue("2")
public class Manga extends Media{

    public String author;
    public String artist;
    public int chapterCount;

    public Manga(String title, String author, String artist, int chapterCount, String status, Date releaseDate){
        this.title = title;
        this.author = author;
        this.artist = artist;
        this.chapterCount = chapterCount;
        this.status = status;
        this.releaseDate = releaseDate;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public int getChapterCount() {
        return chapterCount;
    }

    public void setChapterCount(int chapterCount) {
        this.chapterCount = chapterCount;
    }
}
