import React, { Component } from 'react'
import UserProfileView from './UserProfileView'

export default class UserProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.match.params.id,
            user: null,
        }
    }

    componentDidMount(){
        let url = "http://localhost:8080/api/get_user_by_id?user_id=";
        url = url + this.state.user_id;

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