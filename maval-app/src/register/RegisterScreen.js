import React, { Component } from 'react'
import RegisterDialog from './RegisterDialog'

export default class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRegistered: false,
            email: null,
            username: null,
            password: null,
            passwordConfirmed: false,
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleConfirmPasswordChange(event) {
        if(event.target.value == this.state.password){
            this.setState({passwordConfirmed: true});
        }
        else{
            this.setState({passwordConfirmed:false});
        }
    }

    handleRegister() {
        if(this.state.passwordConfirmed) {
            fetch("http://localhost:8080/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email:this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                }),
            })
                .then(response =>
                    response.json()
                )
                .then(result => {
                    if(result.emailExists) {
                        alert("This email is tied to an existing account.");
                    }
                    else if(result.usernameExists) {
                        alert("This username is taken.");
                    }
                    else {
                        this.setState({
                            isRegistered: true
                        });
                        alert("Register success");
                    }
                    console.log("Success:", result);
                })
                .catch(error => {
                    console.error("Error", error);
                });
        }
        else {
            alert("Passwords do not match.")
        }
    }

    render() {
        return (
            <RegisterDialog
                handleEmailChange = {this.handleEmailChange}
                handleUsernameChange={this.handleUsernameChange}
                handlePasswordChange={this.handlePasswordChange}
                handleConfirmPasswordChange={this.handleConfirmPasswordChange}
                handleRegister={this.handleRegister}
            />
        );
    } 
}