import React, { Component } from 'react'
import RegisterDialog from './RegisterDialog'

export default class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRegistered: false,
            name: null,
            email: null,
            username: null,
            password: null,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    
    handleNameChange(event) {
        this.setState({name: event.target.value});
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

    handleRegister() {
        fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
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

    render() {
        return (
            <RegisterDialog
                handleNameChange = {this.handleNameChange}
                handleEmailChange = {this.handleEmailChange}
                handleUsernameChange={this.handleUsernameChange}
                handlePasswordChange={this.handlePasswordChange}
                handleRegister={this.handleRegister}
            />
        );
    } 
}