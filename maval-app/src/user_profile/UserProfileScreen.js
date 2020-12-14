import React, { Component } from 'react'
import UserProfileView from './UserProfileView'

export default class UserProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: this.props.match.params.id,
            userProfile: [],
        }

        this.handleFavouriteChange = this.handleFavouriteChange.bind(this);
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
                    userProfile: result,
                });
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }

    handleFavouriteChange(media_id, favouriteStatus) {
        let url = "http://localhost:8080/api/change_favourite_status?username=";
        url = url + this.state.userProfile.user.username + "&media_id=" + media_id + "&favourite_status=" + favouriteStatus;

        fetch(url, {
            method: "GET",
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }

    render() {
        return (
            <UserProfileView 
                userProfile={this.state.userProfile} 
                handleFavouriteChange={this.handleFavouriteChange}
            />
        );
    }
}