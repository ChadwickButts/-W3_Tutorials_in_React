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
            let options: Intl.DateTimeFormatOptions = { 
                hour: 'numeric', minute: 'numeric', hour12: true,
                timeZone: this.props.weatherData.timezone
            };
            let sunrise = new Intl.DateTimeFormat('en-US', options).format(new Date(currentWeather.sunrise * 1000));
            let sunset = new Intl.DateTimeFormat('en-US', options).format(new Date(currentWeather.sunset * 1000));

            if (currentWeather !== undefined) {
                return  (
                    <div>
                        <section className="currentSection" >
                            <div id="currentWeather">                               
                                <section className='leftSide'>
                                    <div className='details'>
                                        <span id="temp">
                                            { currentWeather.temp.toPrecision(2) }&deg;
                                        </span> 
                                        <br/>
                                        
                                    </div>
                                    <div id="weatherIcon">
                                        <img alt="weathericon" src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} />                                        
                                    </div>
                                    <div >
                                        <span id="feels_like">Feels Like: {currentWeather.feels_like.toPrecision(2)}&deg; </span>                                        
                                        <span id="humidity">Humidity: {currentWeather.humidity.toPrecision(2)}%</span>
                                        <br/>
                                        <span id="conditions">{currentWeather.weather[0].main} • {currentWeather.weather[0].description}</span>
                                    </div>
                                </section>
                                <section className='rightSide'>
                                    <div className='extraDetails'>
                                        <span >Sunrise: { sunrise }</span>
                                        <br/>
                                        <span >Sunset: { sunset }</span>
                                        <br/>
                                        <span>Wind Speed: { currentWeather.wind_speed }</span> 
                                        <br/>
                                        <span>Wind Direction: { currentWeather.wind_deg }</span> 
                                        <br/>
                                        <span>Ultraviolet Index: { currentWeather.uvi }</span>
                                        <br/> 
                                        <span>Dew Point: { currentWeather.dew_point }</span> 
                                       
                                    </div>
                                </section>
                            </div>
                        </section>
                        {/* <section >
                            Forcast for rest of day
                        </section>
                        <section >
                            Detailed Breakdown
                        </section> */}
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