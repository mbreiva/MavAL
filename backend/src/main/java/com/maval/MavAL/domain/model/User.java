package com.maval.MavAL.domain.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="maval_user")
public class User {

    @Id
    @GeneratedValue
    private int id;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String email;

    private String password;
    private LocalDate creationDate;

    public User() {}

    public User(String email, String username, String password){
        this.email = email;
        this.username = username;
        this.password = password;
        this.creationDate = LocalDate.now();
    }

    public int getId() {
        return id;
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
