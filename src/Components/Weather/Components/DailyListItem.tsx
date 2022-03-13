import React from "react";
import { DailyWeather } from "../Helpers/Types";

class DailyListItem extends React.Component<{ day: DailyWeather }, {}> {
    render() {
        return (
            <article>
                <span> { this.props.day.dt } </span>
                <span> { this.props.day.temp.min } </span>
                <span> { this.props.day.temp.max } </span>
                <span> { this.props.day.weather[0].description } </span>
                <span> { this.props.day.weather[0].main } </span>
                <span> { this.props.day.feels_like.day } </span>
            </article>
        )
    }
}

export default DailyListItem; 