import React , { Component } from 'react'
import LoginDialog from './LoginDialog'
import ProfileDropdown from '../shared_components/ProfileDropdown'
import RegisterScreen from '../register/RegisterScreen';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem("is_logged_in"),
            id: null,
            username: null,
            password: null
        };

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
                        isLoggedIn: true,
                        id: result.id,
                    });
                    localStorage.setItem("is_logged_in", true);
                    localStorage.setItem("user_id", this.state.id);
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
        this.setState({isLoggedIn:false});
        localStorage.clear();
        localStorage.setItem("is_logged_in", false);
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn ? 
                    <ProfileDropdown handleLogout={this.handleLogout}/> :
                    (<div style={{display:"flex"}}>
                        <LoginDialog
                        handleUsernameChange={this.handleUsernameChange}
                        handlePasswordChange={this.handlePasswordChange}
                        handleLogin={this.handleLogin}
                        />
                        <RegisterScreen />
                    </div>)
                }
            </div>
        );
    } 
}
