import React, {Component} from 'react'
import IndividualMangaView from './IndividualMangaView'

export default class IndividualMangaScreen extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            manga: null,
            userId: localStorage.getItem("user_id"),
        }

        this.addUserMedia = this.addUserMedia.bind(this);
        this.addMediaToFavourites = this.addMediaToFavourites.bind(this);
    }

    addUserMedia() {
        let url = "http://localhost:8080/api/add_user_media?user_id=";
        url = url + this.state.userId + "&media_id=" + this.state.manga.id;

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
        let url = "http://localhost:8080/api/add_media_to_favourites?username=";
        url = url + this.state.username + "&title=" + this.state.media.title;

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
        // const { match: { params } } = this.props;

        let url = "http://localhost:8080/api/get_manga_by_id?id=";
        url = url + this.state.id;

        fetch(url, {
            method: "GET",
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                this.setState({
                    manga: result
                });
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }

    render() {
        return (
            <IndividualMangaView 
                manga={this.state.manga}
                addUserMedia={this.addUserMedia}
                addMediaToFavourites={this.addMediaToFavourites}
            />
        );
    }
}