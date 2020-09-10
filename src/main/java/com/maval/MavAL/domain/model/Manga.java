package com.maval.MavAL.domain.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("2")
public class Manga extends Media{
    public String author;
    public String artist;
    public int chapterCount;
}
