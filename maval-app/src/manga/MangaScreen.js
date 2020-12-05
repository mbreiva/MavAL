import React, { Component } from 'react'
import MangaView from './MangaView'

export default class MangaScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            limit:15,
            manga: [],
        };
    }

    componentDidMount() {
        let url = "http://localhost:8080/api/get_manga";

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
            <MangaView manga={this.state.manga}/>
        );
    }

}