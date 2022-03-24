import React from 'react';
import { HourlyWeather, ViewProps } from '../Helpers/Types';
import HourlyTable from './HourlyTable';

export default class HourlyView extends React.Component< ViewProps,{}> {
    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            
        }
    }

    render() {
        if (this.props.weatherData === null) {
            return 'no data';
        } else {
            const hourlyWeather: Array<HourlyWeather> = this.props.weatherData.hourly;

            if (hourlyWeather !== undefined) {
                return  (                    
                    <div>
                       <HourlyTable hourlyData={hourlyWeather}></HourlyTable>
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