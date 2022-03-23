import React from "react";
import { DailyWeather } from "../Helpers/Types";

class DailyListItem extends React.Component<{ day: DailyWeather }, {}> {
    render() {
        let options: Intl.DateTimeFormatOptions = { 
            weekday: "short", month: 'long', day: 'numeric',
            hour12: true
        };
        const date = new Intl.DateTimeFormat('en-US', options).format(new Date(this.props.day.dt * 1000));
        return (
            <article className="dayCard">
                <div className="dayCardMain">
                    <figure>
                        <figcaption> { this.props.day.weather[0].main } </figcaption>
                        <img alt="weathericon" src={`http://openweathermap.org/img/wn/${this.props.day.weather[0].icon}@2x.png`} />                                        
                        <figcaption> { this.props.day.temp.day } </figcaption>
                    </figure>
                    <p> high: { this.props.day.temp.max } </p>
                    <p> low: { this.props.day.temp.min } </p>
                </div>
                <p> { date } </p>
                <p> Feels Like: { this.props.day.feels_like.day } </p>
            </article>
        )
    }
}

export default DailyListItem; 