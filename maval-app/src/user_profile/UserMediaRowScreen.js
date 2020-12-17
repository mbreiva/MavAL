import React, { Component } from 'react'
import UserMediaRowView from './UserMediaRowView'

export default class userMediaRow extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: this.props.user,
            userMedia: this.props.userMedia,
        };

        this.handleProgressChange = this.handleProgressChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleFavouriteChange = this.handleFavouriteChange.bind(this);
        this.handleProgressTypeChange = this.handleProgressTypeChange.bind(this);
    }


    handleProgressChange(event) {
        let updatedProgress = event.target.value;
        let updatedUserMedia = {...this.state.userMedia};
        updatedUserMedia.progress = updatedProgress;

        this.setState({
            userMedia: updatedUserMedia,
        });

        let url = "http://localhost:8080/api/update_user_progress?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.userMedia.media.id + "&user_progress=" + updatedProgress;
        
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
        let updatedUserMedia = {...this.state.userMedia};
        updatedUserMedia.rating = updatedRating;

        this.setState({
            userMedia: updatedUserMedia,
        });

        let url = "http://localhost:8080/api/update_user_rating?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.userMedia.media.id + "&user_rating=" + updatedRating;
        
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
        let updatedUserMedia = {...this.state.userMedia};
        updatedUserMedia.favourite = updatedFavouriteStatus;

        this.setState({
            userMedia: updatedUserMedia
        }, () => {console.log(this.state.userMedia)});

        let url = "http://localhost:8080/api/change_favourite_status?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.userMedia.media.id + "&new_favourite_status=" + updatedFavouriteStatus;

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
        let updatedUserMedia = {...this.state.userMedia};
        updatedUserMedia.progressType = updatedProgressType;

        this.setState({
            userMedia: updatedUserMedia,
        });

        let url = "http://localhost:8080/api/update_user_progress_type?username=";
        url = url + this.state.user.username + "&media_id=" + this.state.userMedia.media.id + "&user_progress_type=" + updatedProgressType;
        
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
                userMedia={this.state.userMedia}
                handleProgressChange={this.handleProgressChange}
                handleRatingChange={this.handleRatingChange}
                handleFavouriteChange={this.handleFavouriteChange}
                handleProgressTypeChange={this.handleProgressTypeChange}
            />
        )
    }
}
