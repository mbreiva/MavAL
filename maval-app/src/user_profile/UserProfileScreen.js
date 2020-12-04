import React, { Component } from 'react'
import UserProfileView from './UserProfileView'

export default class UserProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.match.params.id,
            userProfile: [],
            userAnime: [],
            userManga:[],
        }
    }

    componentDidMount(){
        let url = "http://localhost:8080/api/get_user_profile_by_id?user_id=";
        url = url + this.state.user_id;

        fetch(url, {
            method: "GET",
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                this.setState({
                    //userProfile: [...this.state.userProfile, ...result],
                    user: result.user,
                    userAnime: [...this.state.userAnime, ...result.userAnime],
                    userManga: [...this.state.userManga, ...result.userManga],
                });
                console.log("Success:", result);
                console.log(this.state.user.username);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }

    render() {
        return (
            <UserProfileView user={this.state.user} userProfile={this.state.userProfile} />
        );
    }
}