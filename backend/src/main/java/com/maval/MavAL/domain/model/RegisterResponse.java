package com.maval.MavAL.domain.model;

public class RegisterResponse {
    public boolean emailExists;
    public boolean usernameExists;

    public RegisterResponse() {};

    public RegisterResponse(boolean emailValid, boolean usernameValid) {
        this.emailExists = emailValid;
        this.usernameExists = usernameValid;
    }
}
