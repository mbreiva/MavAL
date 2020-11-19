import React , { Component } from 'react'
import LoginView from './LoginView'

export default class LoginScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false, username: null, password: null};

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleLogin() {
        fetch("http://localhost:8080/api/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: this.state.username, password: this.state.password}),
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                if(!result.usernameValid){
                    alert("Username does not exist.");
                }
                else if(!result.passwordValid){
                    alert("Invalid password");
                }
                else{
                    this.setState({
                        isLoggedIn: true
                    });
                    localStorage.setItem("username", this.state.username);
                    localStorage.setItem("password", this.state.password);
                    alert("Login success");
                }
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }

    handleLogout() {
        // TODO: Add logout logic
        this.setState({isLoggedIn:false});
    }

    render() {
        return (
            <LoginView 
                handleUsernameChange={this.handleUsernameChange}
                handlePasswordChange={this.handlePasswordChange}
                handleLogin={this.handleLogin}
            />
        );
    } 
}
