import React from 'react';
import { ViewProps } from '../Helpers/Types';
import { HourlyWeather } from '../Helpers/Types';


class HourlyListItem extends React.Component< { hourData: HourlyWeather } ,{}> {
    render() {
            return (
            <tr>
                <td > { this.props.hourData.temp} </td>
                <td> { this.props.hourData.weather[0].description } </td>
                <td> { this.props.hourData.weather[0].main } </td>
                <td> { new Date().setTime(this.props.hourData.dt) }</td>
            </tr>)         
        }
}

export default HourlyListItem;