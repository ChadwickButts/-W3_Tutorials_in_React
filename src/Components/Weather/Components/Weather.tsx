import React from 'react';
import WeatherAPI from '../API/WeatherAPI';
import '../weather.css';
import WeatherNav from './WeatherNav';
import TodayView from './TodayView';
import HourlyView from './HourlyView';
import DailyView from './DailyView';

import { formatLocation } from '../Helpers/StringUtils';
import { ViewProps, WeatherStateTypes } from '../Helpers/Types';

/* High-Order Component since the views are similar */
function withWeatherData(WrappedComponent, weatherData) {
    return class extends React.Component<ViewProps , {}> {
        render() {
            return <WrappedComponent weatherData={weatherData} {...this.props} />
        }
    }
}

class Weather extends React.Component<{}, WeatherStateTypes> {
    viewComponent: React.ReactElement;

    constructor(props: Object) {
        super(props);

        let loc = formatLocation('');

        this.state = {
            location: loc,
            lat: 0,
            lon: 0,
            weatherData: null,
            currentView: 'todayView'
        }

        this.viewComponent = <TodayView location={loc} weatherData={null} />;

        this.handleViewChange = this.handleViewChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    getWeatherData(location: string) {
        WeatherAPI.getAllWeather(location).then( data => {
            let weatherData: Object = data;
            this.setState({ weatherData });
            console.log(data);
        }).then(() => {
            this.viewComponent = this.selectView(this.state.currentView, location, this.state.weatherData);
        });
    }

    componentDidMount() {
        //this.getWeatherData();
    }

    selectView(view: string, location: string, weatherData: any): React.ReactElement {
        let element: React.ReactElement;



        switch(view) {
            case 'todayView': element = <TodayView location={location} weatherData={weatherData?.current}/>;
                break;
            case 'hourlyView': element = <HourlyView location={location} weatherData={weatherData?.hourly}/>;
                break;
            case 'dailyView': element = <DailyView location={location} weatherData={weatherData?.daily}/>;
                break;
            default: element = <TodayView location={location} weatherData={weatherData?.current}/>;
        }

        return element;
    }

    handleSearchClick(location: string) {
        let formattedLocation = formatLocation(location);

        this.setState({
            location: formattedLocation            
        });
        
        this.getWeatherData(formattedLocation);
    }

    handleViewChange(event) {
        let btnId = event.target.id;

        let currentView = btnId === 'hourly'
        ? 'hourlyView' : btnId === 'daily'
        ? 'dailyView' : btnId === 'maps'
        ? 'mapsView' : 'todayView';

        this.viewComponent = this.selectView(currentView, this.state.location, this.state.weatherData);
        this.setState({ currentView });
    }

    render() {
        return (
            <div id="weatherApp">
                <WeatherNav onViewChange={this.handleViewChange} onSearchClick={this.handleSearchClick} />
                <main>
                    {this.viewComponent}
                    {this.state.location}
                    {this.state.lat}
                    {this.state.lon}
                </main>
            </div>
        );
    };
}

export default Weather;