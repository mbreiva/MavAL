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

    // updateFavouriteStatus(mediaId, updatedFavouriteStatus)

    render() {
        return (
            <UserProfileView 
                user={this.state.user}
                userMedia={this.state.userMedia} 
            />
        );
    }
}