import React, { Component } from 'react'
import AnimeView from './AnimeView'

export default class AnimeScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            limit:100,
            anime: [],
        };
    }

    componentDidMount() {
        let url = "http://localhost:8080/api/get_anime";

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
            <AnimeView anime={this.state.anime}/>
        );
    }

}