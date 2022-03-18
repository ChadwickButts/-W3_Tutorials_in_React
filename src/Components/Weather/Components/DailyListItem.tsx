import React from "react";
import { DailyWeather } from "../Helpers/Types";

class DailyListItem extends React.Component<{ day: DailyWeather }, {}> {
    render() {
        const date = new Date(this.props.day.dt * 1000)
        return (
            <article>
                <span> { date.toLocaleDateString() } </span>
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