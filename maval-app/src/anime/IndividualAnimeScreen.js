import React, {Component} from 'react'
import IndividualAnimeView from './IndividualAnimeView'

export default class IndividualAnimeScreen extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            anime: null,
            user_id: localStorage.getItem("user_id"),
        }

        this.addUserMedia = this.addUserMedia.bind(this);
        this.addMediaToFavourites = this.addMediaToFavourites.bind(this);
    }

    addUserMedia() {
        let url = `http://localhost:8080/api/add_user_media?user_id=${this.state.user_id}&media_id=${this.state.anime.id}`;

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

    addMediaToFavourites() {
        let url = `http://localhost:8080/api/add_media_to_favourites?username=${this.state.username}&id=${this.state.anime.id}`;

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

    componentDidMount(){
        let url = `http://localhost:8080/api/get_anime_by_id?id=${this.state.id}`;

        fetch(url, {
            method: "GET",
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                this.setState({
                    anime: result
                });
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }

    render() {
        return (
            <IndividualAnimeView 
                anime={this.state.anime}
                addUserMedia={this.addUserMedia}
                addMediaToFavourites={this.addMediaToFavourites}
            />
        );
    }
}