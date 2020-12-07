package com.maval.MavAL.domain.model;

public class LoginResponse {
    public boolean usernameValid;
    public boolean passwordValid;
    public int id;

    public LoginResponse() {};

    public LoginResponse(boolean usernameValid, boolean passwordValid, int id){
        this.usernameValid = usernameValid;
        this.passwordValid = passwordValid;
        this.id = id;
    }

}
