package com.maval.MavAL.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Set;

@Entity(name="maval_user")
public class User {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String username;
    private String password;
    private String email;

    @ManyToMany
    Set<Media> favouriteMedia;

    @ManyToMany
    Set<Media> mediaProgress;

    public User(String name, String username, String password, String email){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
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
