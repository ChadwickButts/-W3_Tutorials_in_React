import React from 'react';
import { CurrentWeather, ViewProps } from '../Helpers/Types';



export default class TodayView extends React.Component< ViewProps,{}> {
    componentDidUpdate(prevProps) {
        console.log("props changed");
    }

    render() {
        if (this.props.weatherData === null) {
            return 'no data';
        } else {
            const currentWeather: CurrentWeather = this.props.weatherData.current;
            const date = new Date();

            if (currentWeather !== undefined) {
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
                                    <div id="weatherIcon">
                                        <img alt="weathericon" src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} />                                        
                                    </div>
                                    <div id="mainDetails">
                                        <span id="temp">
                                            {currentWeather.temp}&deg;
                                        </span> 
                                    </div>
                                    <div id="extraDetails">
                                        <span id="feels_like">Feels Like: {currentWeather.feels_like}&deg;</span>
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
            } else {
                return (
                    <div>Do Better</div>
                )
            }

            
        }
    }
}