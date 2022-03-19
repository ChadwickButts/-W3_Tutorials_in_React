import React from 'react';
import { ViewProps } from '../Helpers/Types';
import { HourlyWeather } from '../Helpers/Types';


class HourlyListItem extends React.Component< { hourData: HourlyWeather } ,{}> {
    render() {
        const date = new Date(this.props.hourData.dt * 1000);
        let options: Intl.DateTimeFormatOptions = { 
            month: 'long',
            day: 'numeric',
            weekday: 'short'
        };

        return (
            <tr >
                <td> { Intl.DateTimeFormat('en-US', options).format(date) }</td>
                <td> 
                <img alt="weathericon" src={`http://openweathermap.org/img/wn/${this.props.hourData.weather[0].icon}.png`} />   
                    { this.props.hourData.temp} 
                </td>
                <td> { this.props.hourData.weather[0].main } </td>
                <td> { this.props.hourData.weather[0].description } </td>
            </tr>);         
        }
}

export default HourlyListItem;