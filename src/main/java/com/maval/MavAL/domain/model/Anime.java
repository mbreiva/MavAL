package com.maval.MavAL.domain.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("1")
public class Anime extends Media{
    public int episodeCount;
    public String studio;

}
