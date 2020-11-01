package com.maval.MavAL.domain.model;

public class RegisterRequestDetails {

    public String name;
    public String email;
    public String username;
    public String password;

    public RegisterRequestDetails() {};

    public RegisterRequestDetails(String name, String email, String username, String password) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}
