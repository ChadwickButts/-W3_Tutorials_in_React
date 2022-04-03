import React from 'react';
import SearchLocation from './SearchLocation';
import { NavPropTypes } from '../Helpers/Types';

class WeatherNav extends React.Component< NavPropTypes > {
    constructor(props) {
        super(props);

        this.handleViewClick = this.handleViewClick.bind(this);
    }

    handleViewClick(event) {
        let navElements = document.querySelectorAll("#viewsUL li");
        navElements.forEach(elem => {
            elem.classList.remove('active');
        })

        let parent = event.target.parentNode;
        parent.classList.add('active');

        this.props.onViewChange(event)
    }

    render() {
       return (
           <header>
                <nav>
                    <SearchLocation onSearchClick={this.props.onSearchClick} />
                    <ul id="viewsUL">
                        <li className="active">
                            <button type="button" id="today" onClick={this.handleViewClick}>Today</button> 
                        </li>
                        <li>
                            <button type="button" id="hourly" onClick={this.handleViewClick}>Hourly</button> 
                        </li>
                        <li>
                            <button type="button" id="daily" onClick={this.handleViewClick}>Daily (8-Days)</button> 
                        </li>
                        {/* <li>
                            <button type="button" id="maps" onClick={this.handleViewClick}>Weather Maps</button> 
                        </li> */}
                    </ul>
                </nav>
            </header>
       )
    }
}

export default WeatherNav;