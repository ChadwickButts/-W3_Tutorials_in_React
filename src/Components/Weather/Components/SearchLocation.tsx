import React from 'react';
import { SearchBarPropTypes } from '../Helpers/Types';


class SearchLocation extends React.Component< SearchBarPropTypes > {
    userInput:string = '';

    constructor(props) {
        super(props);

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleEnterPress = this.handleEnterPress.bind(this);
    }

    handleEnterPress(event) {
        if (event.key === "Enter" || event.keyCode === 13 && this.userInput !== "") {
            this.handleSearchClick();
        }
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
                <input id="searchField" type="text" placeholder="Search City or Zip Code" onChange={this.handleSearchChange} onKeyUp={this.handleEnterPress}></input>
                <button id="searchBtn" type="button" onClick={this.handleSearchClick} >
                    <span className="material-icons md-18">search</span>
                </button>
            </div>
        );
    }
}

export default SearchLocation;