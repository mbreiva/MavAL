import React , { Component } from 'react'
import { Redirect } from 'react-router-dom';
import SearchBarView from './SearchBarView'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: null,
            redirect: false,
        }

        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleKeywordChange(event) {
        this.setState({
            keyword: event.target.value,
            redirect: false,
        });
    }

    handleSearchSubmit() {
        this.setState({
            redirect: true,
        });
    }


    render() {
        return (
            <div>
                <SearchBarView 
                    handleKeywordChange={this.handleKeywordChange}
                    handleSearchSubmit={this.handleSearchSubmit}
                />
                {this.state.redirect==true &&
                    <Redirect to={{
                        pathname: "/search",
                        search: "?keyword="+this.state.keyword,
                    }}/>
                }
            </div>
        )
    }
}
