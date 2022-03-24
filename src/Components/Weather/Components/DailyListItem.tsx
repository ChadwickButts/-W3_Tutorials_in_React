import React, { EventHandler } from "react";
import { DailyWeather } from "../Helpers/Types";

class DailyListItem extends React.Component<{ day: DailyWeather }, {}> {
    render() {
        let options: Intl.DateTimeFormatOptions = { 
            weekday: "short", month: 'long', day: 'numeric',
            hour12: true
        };
        const date = new Intl.DateTimeFormat('en-US', options).format(new Date(this.props.day.dt * 1000));
        return (
            <article className="dayCard" >
                <div className="dayCardMain">
                    <figure>
                        <figcaption> {this.props.day.weather[0].main} </figcaption>
                        <img alt="weathericon" src={`http://openweathermap.org/img/wn/${this.props.day.weather[0].icon}@2x.png`} />
                        <figcaption> {this.props.day.temp.day.toPrecision(2)}℉ </figcaption>
                    </figure>
                    <span className="dayCardHigh">
                        high:
                        <span className="dayCardTemps"> {this.props.day.temp.max.toPrecision(2)}° </span>
                    </span>
                    <span className="dayCardLow">
                        low:
                        <span className="dayCardTemps"> {this.props.day.temp.min.toPrecision(2)}° </span>
                    </span>
                </div>
                <span className="dayCardDate"> {date} </span>
                <span className="dayCardFeels">
                    Feels Like:
                    <span className="dayCardFeelsTemp"> {this.props.day.feels_like.day.toPrecision(2)}° </span>
                </span>
            </article>
        )
    }
}

export default DailyListItem; 