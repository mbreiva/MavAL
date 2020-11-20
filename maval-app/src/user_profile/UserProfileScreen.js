import React, { Component } from 'react'
import UserProfileView from './UserProfileView'

export default class UserProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.match.params.id,
            user: null,
        }
    }

    componentDidMount(){
        let url = "http://localhost:8080/api/get_user_by_username?username=";
        url = url + this.state.username;

        fetch(url, {
            method: "GET",
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                this.setState({
                    user: result
                });
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }

    render() {
        return (
            <UserProfileView user={this.state.user} />
        );
    }
}