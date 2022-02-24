import React from 'react';

type PropTypes = {
    onSearchClick: (location: string) => void
}

class SearchLocation extends React.Component< PropTypes > {
    userInput:string = '';

    constructor(props) {
        super(props);

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleSearchChange(event) {
       this.userInput = event.target.value;
    }

    handleSearchClick() {
        this.props.onSearchClick(this.userInput);
    }
    
    render() {
        return(
            <div id="searchFieldContainer">
                <input id="searchField" type="text" placeholder="Search City or Zip Code" onChange={this.handleSearchChange}></input>
                <button id="searchBtn" type="button" onClick={this.handleSearchClick}>
                    <span className="material-icons md-18">search</span>
                </button>
            </div>
        );
    }
}

export default SearchLocation;