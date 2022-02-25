import React from 'react';
import { ViewProps } from '../Helpers/Types';



export default class TodayView extends React.Component< ViewProps,{}> {
    constructor(props) {
        super(props)
    }
    componentVar;

    updateView() {
        this.componentVar = this.props.weatherData.current.weather[0].description;
    }

    componentDidUpdate(prevProps) {
        if (this.props.weatherData !== null) {
            this.updateView();
        }
        
        console.log("props changed");
    }

    render() {
        if (this.props.weatherData === null) {
            return 'no data';
        } else {
            const currentWeather = this.props.weatherData.current;
            const date = new Date();

            console.log(this.props.weatherData);

            return  (
                <div>
                    <section className="currentSection" >
                        <div id="currentWeather">
                            <h2 className="location">
                                {this.props.location + "  "}
                                <br/>
                                <span id="time">{date.toString()}</span>
                            </h2>
                            <div id="details" >
                                <div id="mainDetails">
                                    <span id="temp">
                                        {parseInt(currentWeather.temp)}&deg;
                                        <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} />
                                    </span> 
                                </div>
                                <div id="extraDetails">
                                    <span id="feels_like">Feels Like: {parseInt(currentWeather.feels_like)}&deg;</span>
                                    <br/>
                                    <span id="humidity">Humidity: {currentWeather.humidity}%</span>
                                </div>
                                <div id="conditions">
                                    <span>{currentWeather.weather[0].main}</span>
                                    <br/>
                                    <span>{currentWeather.weather[0].description}</span>  
                                </div>
                            </div>
                        </div>
                    </section>
                    <section >
                        Forcast for rest of day
                    </section>
                    <section >
                        Detailed Breakdown
                    </section>
                </div>
            );
        }
    }
}