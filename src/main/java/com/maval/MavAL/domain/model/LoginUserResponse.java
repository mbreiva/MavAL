package com.maval.MavAL.domain.model;

public class LoginUserResponse {
    public boolean usernameValid;
    public boolean passwordValid;

    public LoginUserResponse() {};

    public LoginUserResponse(boolean usernameValid, boolean passwordValid){
        this.usernameValid = usernameValid;
        this.passwordValid = passwordValid;
    }

}
