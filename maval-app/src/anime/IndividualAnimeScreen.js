import React, {Component} from 'react'
import IndividualAnimeView from './IndividualAnimeView'

export default class IndividualAnimeScreen extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            id: this.props.match.params.id,
            anime: null,
        }

        this.addUserAnime = this.addUserAnime.bind(this);
    }

    addUserAnime() {
        var username = localStorage.getItem('username');
        let url = "http://localhost:8080/api/add_user_anime?username=";
        url = url + username + "&title=" + this.state.anime.title;

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

        let url = "http://localhost:8080/api/get_anime_by_id?id=";
        url = url + this.state.id;

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
                addUserAnime={this.addUserAnime}
            />
        );
    }
}