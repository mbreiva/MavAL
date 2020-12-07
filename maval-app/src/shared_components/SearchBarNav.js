import React , { Component } from 'react'

export default class SearchBarNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange() {
        this.setState({title: event.target.value});
    }

    handleSearch() {
        // TODO: Complete
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
