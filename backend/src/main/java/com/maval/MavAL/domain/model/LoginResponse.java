package com.maval.MavAL.domain.model;

public class LoginResponse {
    public boolean usernameValid;
    public boolean passwordValid;
    public int userId;
    public AuthenticationToken authToken = new AuthenticationToken();

    public LoginResponse() {}

    public LoginResponse(boolean usernameValid, boolean passwordValid, int id, String token){
        this.usernameValid = usernameValid;
        this.passwordValid = passwordValid;
        this.userId = id;
        authToken.token = token;
    }

}
