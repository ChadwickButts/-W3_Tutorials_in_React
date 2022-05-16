//import { ViewProps } from '../Helpers/Types';
//import { HourlyWeather } from '../Helpers/Types';

function HourlyListItem(props) {
    const date = new Date(props.hourData.dt * 1000);

    let options: Intl.DateTimeFormatOptions = { 
        hour: 'numeric',
        minute: 'numeric',
        weekday: 'short'
    };

    return (
        <tr >
            <td> { Intl.DateTimeFormat('en-US', options).format(date) }</td>
            <td>                     
                <span className="hrlyTemp">{ props.hourData.temp.toPrecision(2) }&#0176; </span>
            </td>
            <td>
                <img className="hrlyConditionsIcon" alt="weathericon" src={`http://openweathermap.org/img/wn/${props.hourData.weather[0].icon}.png`} />    
                { props.hourData.weather[0].main } 
            </td>
            <td> { props.hourData.feels_like.toPrecision(2) }&#0176; </td>
            <td> { props.hourData.humidity }% </td>
            <td> { props.hourData.wind_speed.toPrecision(2) } mph </td>
            <td> { props.hourData.dew_point.toPrecision(2) }&#0176; </td>
            {/* <td> { props.hourData.weather[0].description } </td> */}
        </tr>
    );    
}

/*
class HourlyListItem extends React.Component< { hourData: HourlyWeather } ,{}> {
    render() {
        const date = new Date(this.props.hourData.dt * 1000);
        let options: Intl.DateTimeFormatOptions = { 
            hour: 'numeric',
            minute: 'numeric',
            weekday: 'short'
        };

        return (
            <tr >
                <td> { Intl.DateTimeFormat('en-US', options).format(date) }</td>
                <td>                     
                    <span className="hrlyTemp">{ this.props.hourData.temp.toPrecision(2) }&#0176; </span>
                </td>
                <td>
                    <img className="hrlyConditionsIcon" alt="weathericon" src={`http://openweathermap.org/img/wn/${this.props.hourData.weather[0].icon}.png`} />    
                    { this.props.hourData.weather[0].main } 
                </td>
                <td> { this.props.hourData.feels_like.toPrecision(2) }&#0176; </td>
                <td> { this.props.hourData.humidity }% </td>
                <td> { this.props.hourData.wind_speed.toPrecision(2) } mph </td>
                <td> { this.props.hourData.dew_point.toPrecision(2) }&#0176; </td>
                { <td> { this.props.hourData.weather[0].description } </td> }
            </tr>);         
        }
}
*/
export default HourlyListItem;