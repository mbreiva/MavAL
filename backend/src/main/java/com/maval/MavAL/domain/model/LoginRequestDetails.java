package com.maval.MavAL.domain.model;

public class LoginRequestDetails {
    public String username;
    public String password;

    public LoginRequestDetails(){};

    public LoginRequestDetails(String username, String password){
        this.username = username;
        this.password = password;
    }
}
