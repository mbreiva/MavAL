package com.maval.MavAL.domain.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.util.Date;

@Entity
@DiscriminatorValue("1")
public class Anime extends Media{

    public String studio;
    public int episodeCount;
    public String season;

    public Anime() {}

    public Anime(String title, String studio, int episodeCount, String status, Date releaseDate, String season){
        this.title = title;
        this.studio = studio;
        this.episodeCount = episodeCount;
        this.status = status;
        this.releaseDate = releaseDate;
        this.season = season;
    }

    public String getStudio() {
        return studio;
    }

    public void setStudio(String studio) {
        this.studio = studio;
    }

    public int getEpisodeCount() {
        return episodeCount;
    }

    public void setEpisodeCount(int episodeCount) {
        this.episodeCount = episodeCount;
    }

    public String getSeason() { return season; }

    public void setSeason(String season) { this.season = season; }
}
