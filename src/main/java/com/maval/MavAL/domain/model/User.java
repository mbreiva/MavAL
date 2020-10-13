package com.maval.MavAL.domain.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name="maval_user")
public class User {

    @Id
    @GeneratedValue
    private int id;
    private String name;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String email;

    private String password;
    private LocalDate creationDate;

    @ManyToMany
    Set<Media> favouriteMedia;

    @ManyToMany
    Set<Media> mediaProgress;

    public User(String name, String username, String password, String email){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.creationDate = LocalDate.now();
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
