import React from 'react';

class WeatherNav extends React.Component<{ onViewChange: React.ChangeEventHandler<MouseEvent> }, {}> {
    constructor(props) {
        super(props);

        this.handleViewClick = this.handleViewClick.bind(this);
    }

    handleViewClick(event) {
        this.props.onViewChange(event)
    }

    render() {
       return (
            <nav>
                <ul id="viewsUL">
                    <li>
                        <button type="button" id="today" onClick={this.handleViewClick}>Today</button> 
                    </li>
                    <li>
                        <button type="button" id="hourly" onClick={this.handleViewClick}>Hourly</button> 
                    </li>
                    <li>
                        <button type="button" id="daily" onClick={this.handleViewClick}>Daily (7 Days)</button> 
                    </li>
                    <li>
                        <button type="button" id="maps" onClick={this.handleViewClick}>Weather Maps</button> 
                    </li>
                </ul>
            </nav>
       )
    }
}

export default WeatherNav;