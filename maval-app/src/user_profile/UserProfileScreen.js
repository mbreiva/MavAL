import React, { Component } from 'react'
import UserProfileView from './UserProfileView'

export default class UserProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.match.params.id,
            user: null,
            userMedia: [],
        }

        this.updateProgress = this.updateProgress.bind(this);
        this.updateRating = this.updateRating.bind(this);
        this.updateProgressType = this.updateProgressType.bind(this);
        this.updateFavourite = this.updateFavourite.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.setState({ userId: this.props.match.params.id })

            let url = "http://localhost:8080/api/get_user_profile_by_id?user_id=";
            url = url + this.props.match.params.id;

            fetch(url, {
                method: "GET",
            })
                .then(response =>
                    response.json()
                )
                .then(result => {
                    this.setState({
                        user: result.user,
                        userMedia: result.userMedia,
                    });
                    console.log("Success:", result);
                })
                .catch(error => {
                    console.error("Error", error);
                });
        }
    }

    componentDidMount(){
        let url = "http://localhost:8080/api/get_user_profile_by_id?user_id=";
        url = url + this.state.userId;

        fetch(url, {
            method: "GET",
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                this.setState({
                    user: result.user,
                    userMedia: result.userMedia,
                });
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }

    updateProgress(userMediaId, updatedProgress) {
        let updatedUserMedia = [...this.state.userMedia];
        let mediaId;

        updatedUserMedia.forEach(function(userMedium){
            if(userMedium.id === userMediaId){
                userMedium.progress = updatedProgress;
                mediaId = userMedium.media.id;
            }
        })

        this.setState({ userMedia: updatedUserMedia });

        let url = "http://localhost:8080/api/update_user_progress?username=";
        url = url + this.state.user.username + "&media_id=" + mediaId + "&user_progress=" + updatedProgress;
        
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

    updateRating(userMediaId, updatedRating) {
        let updatedUserMedia = [...this.state.userMedia];
        let mediaId;

        updatedUserMedia.forEach(function(userMedium){
            if(userMedium.id === userMediaId){
                userMedium.rating = updatedRating;
                mediaId = userMedium.media.id;
            }
        })

        this.setState({ userMedia: updatedUserMedia });

        let url = "http://localhost:8080/api/update_user_rating?username=";
        url = url + this.state.user.username + "&media_id=" + mediaId + "&user_rating=" + updatedRating;
        
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

    updateProgressType(userMediaId, updatedProgressType) {
        let updatedUserMedia = [...this.state.userMedia];
        let mediaId;

        updatedUserMedia.forEach(function(userMedium){
            if(userMedium.id === userMediaId){
                userMedium.progressType = updatedProgressType;
                mediaId = userMedium.media.id;
            }
        })

        this.setState({ userMedia: updatedUserMedia });

        let url = "http://localhost:8080/api/update_user_progress_type?username=";
        url = url + this.state.user.username + "&media_id=" + mediaId + "&user_progress_type=" + updatedProgressType;
        
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

    updateFavourite(userMediaId, updatedFavouriteStatus) {
        let updatedUserMedia = [...this.state.userMedia];
        let mediaId;

        updatedUserMedia.forEach(function(userMedium){
            if(userMedium.id === userMediaId){
                userMedium.favourite = updatedFavouriteStatus;
                mediaId = userMedium.media.id;
            }
        })

        this.setState({ userMedia: updatedUserMedia });

        let url = "http://localhost:8080/api/change_favourite_status?username=";
        url = url + this.state.user.username + "&media_id=" + mediaId + "&new_favourite_status=" + updatedFavouriteStatus;

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
                user={this.state.user}
                userMedia={this.state.userMedia} 
                updateProgress={this.updateProgress}
                updateRating={this.updateRating}
                updateProgressType={this.updateProgressType}
                updateFavourite={this.updateFavourite}
            />
        );
    }
}