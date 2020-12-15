import React, { Component } from 'react'
import UserMediaRowView from './UserMediaRowView'

export default class userMediaRow extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userMediaId: this.props.userMedia.id,
            user: this.props.user,
            media: this.props.userMedia.media,
            mediaType: this.props.userMedia.mediaType,
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

    handleProgressChange(event) {
        let updatedProgress = event.target.value;
        this.setState({
            userProgress: updatedProgress,
        });
        let url = "http://localhost:8080/api/update_user_progress?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.media.id + "&user_progress=" + updatedProgress;
        
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

    handleRatingChange(event) {
        let updatedRating = event.target.value;
        this.setState({
            userRating: updatedRating,
        });
        let url = "http://localhost:8080/api/update_user_rating?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.media.id + "&user_rating=" + updatedRating;
        
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

    handleFavouriteChange(updatedFavouriteStatus) {
        this.setState({
            favourite: updatedFavouriteStatus,
        });
        let url = "http://localhost:8080/api/change_favourite_status?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.media.id + "&favourite_status=" + updatedFavouriteStatus;

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

    handleProgressTypeChange(event) {
        let updatedProgressType = event.target.value;
        this.setState({
            userProgressType: updatedProgressType,
        });
        let url = "http://localhost:8080/api/update_user_progress_type?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.media.id + "&user_progress_type=" + updatedProgressType;
        
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
                userMediaId={this.state.userMediaId}
                mediaType={this.state.mediaType}
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
