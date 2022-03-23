import React from 'react';
import { DailyWeather, ViewProps } from '../Helpers/Types';
import DailyListItem from './DailyListItem';

class DailyView extends React.Component<ViewProps,{}> {

    render() {
        const days = this.props.weatherData.daily.map( (day: DailyWeather, i) => {
            return (
                <DailyListItem key={i} day={day} />
            );
        });
        
        return  (
            <section className="currentSection" >
                <div className="dayContainer">
                    <h3>8-Day Weather Forecast</h3>
                    <div className="dayHorizontal">
                        { days }
                    </div>
                </div>
            </section>
        );        
    }
}

export default DailyView;