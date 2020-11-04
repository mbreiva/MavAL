package com.maval.MavAL.domain.model;

public class LoginResponse {
    public boolean usernameValid;
    public boolean passwordValid;

    public LoginResponse() {};

    public LoginResponse(boolean usernameValid, boolean passwordValid){
        this.usernameValid = usernameValid;
        this.passwordValid = passwordValid;
    }

}
