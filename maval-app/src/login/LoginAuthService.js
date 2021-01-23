import React , { Component } from 'react'
import LoginDialog from './LoginDialog'

export default class LoginAuthService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            errorMsg: null,
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.clearStates = this.clearStates.bind(this);
    }
    
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    clearStates() {
        this.setState({
            username: null,
            password: null,
            errorMsg: null,
        });
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
                    this.setState({
                        errorMsg: "Username does not exist."
                    });
                }
                else if(!result.passwordValid) {
                    this.setState({
                        errorMsg: "Password invalid."
                    });
                }
                else {
                    this.setState({
                        errorMsg: null,
                    });
                    
                    this.props.login();
                    localStorage.setItem("user_id", result.userId);
                    localStorage.setItem("auth_token", result.authToken.token);
                }
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }

    render() {
        return (
            <LoginDialog
                handleUsernameChange={this.handleUsernameChange}
                handlePasswordChange={this.handlePasswordChange}
                handleLogin={this.handleLogin}
                errorMsg={this.state.errorMsg}
                clearStates={this.clearStates}
            />
        );
    } 
}
