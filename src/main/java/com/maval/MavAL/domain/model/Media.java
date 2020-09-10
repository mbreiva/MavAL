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

}
