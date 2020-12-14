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
            errorMsg: null,
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.clearStates = this.clearStates.bind(this);
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
        if(event.target.value === this.state.password){
            this.setState({passwordConfirmed: true});
        }
        else{
            this.setState({passwordConfirmed:false});
        }
    }

    clearStates() {
        this.setState({
            email: null,
            username: null,
            password: null,
            passwordConfirmed: false,
            errorMsg: null,
        });
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
                        this.setState({
                            errorMsg: "This email is tied to an existing account.",
                        });
                    }
                    else if(result.usernameExists) {
                        this.setState({
                            errorMsg: "This username is taken.",
                        });
                    }
                    else {
                        this.setState({
                            isRegistered: true,
                            errorMsg: null,
                        });
                    }
                    console.log("Success:", result);
                })
                .catch(error => {
                    console.error("Error", error);
                });
        }
        else {
            this.setState({
                errorMsg: "Passwords do not match.",
            });
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
                errorMsg={this.state.errorMsg}
                clearStates={this.clearStates}
            />
        );
    } 
}