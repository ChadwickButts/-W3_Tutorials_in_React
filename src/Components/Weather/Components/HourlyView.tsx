import React from 'react';
import { ViewProps } from '../Helpers/Types';

export default class HourlyView extends React.Component< ViewProps,{}> {
    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            
        }
    }

    render() {
        if (this.props.weatherData === null) {
            return 'no data';
        } else {
            const hourlyWeather = this.props.weatherData.hourly;

            if (hourlyWeather !== undefined) {
                let uiChange = hourlyWeather.hourly[0].weather[0].description;

                return  (
                    <div>
                        <h3>Today it is: {uiChange}</h3>
                    </div>
                );
            } else {
                return (
                    <div>Do Better</div>
                )
            }
        } 
    }
}