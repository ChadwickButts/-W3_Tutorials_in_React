import React from 'react';
import WeatherAPI, { WeatherObject } from './WeatherAPI';
import './weather.css';
import WeatherNav from './WeatherNav';
import StateCodes from './utils/StateCodes';

type ViewProps = {
    location: string
}
class TodayView extends React.Component< ViewProps,{}> {
    getWeatherData() {
        console.log(this.props.location);
        WeatherAPI.getAllWeather(this.props.location).then( data => {

            let copyProps: WeatherObject = {} as WeatherObject;

            for (let prop in data['current']) {;
                copyProps[prop] = data[prop];
            }

            console.log(data['current']);
        });
    }

    componentDidMount() {
        this.getWeatherData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.getWeatherData();
        }
    }

    render() {
        return 'Today';
    }
}

class HourlyView extends React.Component< ViewProps,{}> {
    getWeatherData() {
        console.log(this.props.location);
        WeatherAPI.getAllWeather(this.props.location).then( data => {

            let copyProps: WeatherObject = {} as WeatherObject;

            for (let prop in data['hourly']) {;
                copyProps[prop] = data[prop];
            }

            console.log(data['hourly']);
        });
    }

    componentDidMount() {
        this.getWeatherData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.getWeatherData();
        }
    }

    render() {
        return 'hourly';
    }
}

class DailyView extends React.Component<ViewProps,{}> {
    getWeatherData() {
        console.log(this.props.location);
        WeatherAPI.getAllWeather(this.props.location).then( data => {

            let copyProps: WeatherObject = {} as WeatherObject;

            for (let prop in data['daily']) {;
                copyProps[prop] = data[prop];
            }

            console.log(data['daily']);
        });
    }

    componentDidMount() {
        this.getWeatherData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.getWeatherData();
        }
    }

    render() {
        return 'daily';
    }
}

class MapsView extends React.Component<ViewProps,{}> {

    render() {
        return 'maps';
    }
}

type StateTypes = {
    location: string, 
    lat: number,
    lon: number,
    weather: WeatherObject,
    currentView: string
}

class Weather extends React.Component<{}, StateTypes> {
    viewComponent: React.ReactElement;

    constructor(props: Object) {
        super(props);

        let loc = this.formatLocation('tampa,fl');

        this.viewComponent = <TodayView location={loc} />

        this.state = {
            location: loc,
            lat: 0,
            lon: 0,
            weather: null,
            currentView: 'todayView'
        }

        this.handleViewChange = this.handleViewChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    formatLocation(location: string): string {
        let formattedLocation;
        let [city, state, country] = location.split(',');

        city = city.toLowerCase().trim();
        state = StateCodes[state.toLowerCase().trim()];
        if (country === undefined) {
            country = 'US'
        }

        formattedLocation = city + ',' + state + ',' + country;
        return formattedLocation;
    }

    selectView(view: string, location: string): React.ReactElement {
        let element: React.ReactElement;

        switch(view) {
            case 'todayView': element = <TodayView location={location} />;
                break;
            case 'hourlyView': element = <HourlyView location={location} />;
                break;
            case 'dailyView': element = <DailyView location={location} />;
                break;
            case 'mapsView': element = <MapsView location={location} />;
                break;
            default: element = <TodayView location={location} />;
        }

        return element;
    }

    handleSearchClick(location: string) {
        let formattedLocation = this.formatLocation(location);

        this.viewComponent = this.selectView(this.state.currentView, formattedLocation);
        
        this.setState({
            location: formattedLocation
        });
    }

    handleViewChange(event) {
        let btnId = event.target.id;

        let currentView = btnId === 'hourly'
        ? 'hourlyView' : btnId === 'daily'
        ? 'dailyView' : btnId === 'maps'
        ? 'mapsView' : 'todayView';

        this.viewComponent = this.selectView(currentView, this.state.location);

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