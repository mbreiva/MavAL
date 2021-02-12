import React, { Component } from 'react'
import SearchPageView from './SearchPageView'
import queryString from 'query-string'

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            keyword: null,
        }

    }

    componentDidMount() {
        let params = queryString.parse(this.props.location.search);
        this.setState({ keyword: params.keyword, });

        let url = `http://localhost:8080/api/searchMediaByTitle?keyword=${params.keyword}`;

        fetch(url, {
            method: "GET",
        })
        .then(response => 
            response.json()
        )
        .then(result => {
            this.setState({
                results: result,
            });

            console.log("Success:", result);
        })
        .catch(error => {
            console.error("Error", error);
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.location.search !== prevProps.location.search) {
            let params = queryString.parse(this.props.location.search);
            this.setState({ keyword: params.keyword, });

            let url = `http://localhost:8080/api/searchMediaByTitle?keyword=${params.keyword}`;

            fetch(url, {
                method: "GET",
            })
            .then(response => 
                response.json()
            )
            .then(result => {
                this.setState({
                    results: result,
                });

                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
        }
    }

    render() {
        return (
            <div>
                <SearchPageView 
                    results={this.state.results}
                    keyword={this.state.keyword} 
                />
            </div>
        )
    }
}
