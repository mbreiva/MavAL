import React, { Component } from 'react'
import UserMediaRowView from './UserMediaRowView'

export default class userMediaRow extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: this.props.userMedia.user,
            media: this.props.userMedia.media,
            userProgress: this.props.userMedia.progress,
            userRating: this.props.userMedia.rating,
            userProgressType: this.props.userMedia.progressType,
            favourite: this.props.userMedia.favourite,
        };

        this.handleProgressChange = this.handleProgressChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleFavouriteChange = this.handleFavouriteChange.bind(this);
        this.handleProgressTypeChange = this.handleProgressTypeChange.bind(this);
    }

    handleProgressChange() {
        let url = "http://localhost:8080/api/update_user_progress?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.media.id + "&user_progress=" + this.state.userProgress;
        
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

    handleRatingChange() {
        let url = "http://localhost:8080/api/update_user_rating?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.media.id + "&user_rating=" + this.state.userRating;
        
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

    handleFavouriteChange() {
        let url = "http://localhost:8080/api/change_favourite_status?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.media.id + "&favourite_status=" + this.state.favourite;

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

    handleProgressTypeChange() {
        let url = "http://localhost:8080/api/update_user_progress_type?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.media.id + "&user_progress_type=" + this.state.userProgressType;
        
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
            <UserMediaRowView
                media={this.state.media}
                userProgress={this.state.userProgress}
                userRating={this.state.userRating}
                favourite={this.state.favourite}
                userProgressType={this.state.userProgressType}
                handleProgressChange={this.handleProgressChange}
                handleRatingChange={this.handleRatingChange}
                handleFavouriteChange={this.handleFavouriteChange}
                handleProgressTypeChange={this.handleProgressTypeChange}
            />
        )
    }
}
