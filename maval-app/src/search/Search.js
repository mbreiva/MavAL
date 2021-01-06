import React , { Component } from 'react'
import { Redirect } from 'react-router-dom';
import SearchBar from './SearchBar'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: null,
            results: [],
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
    }

    handleKeywordChange(event) {
        this.setState({keyword: event.target.value});
    }

    handleSearch() {
        let url = "http://localhost:8080/api/searchMediaByTitle?keyword=" + this.state.keyword;

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


    render() {
        return (
            <div>
                <SearchBar 
                    handleKeywordChange={this.handleKeywordChange}
                    handleSearch={this.handleSearch} 
                />
                {this.state.results.length > 0 &&
                    <Redirect to={{
                        pathname: "/results",
                        search: "?keyword="+this.state.keyword,
                        state: { results: this.state.results },
                    }}/>
                }
            </div>
        )
    }
}
