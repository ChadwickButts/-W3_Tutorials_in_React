import React from 'react';
import WeatherAPI from '../API/WeatherAPI';
import '../weather.css';
import WeatherNav from './WeatherNav';
import TodayView from './TodayView';
import HourlyView from './HourlyView';
import DailyView from './DailyView';

import { formatLocation } from '../Helpers/StringUtils';
import { AllWeather, GeoDataTransfer, ViewProps, WeatherStateTypes } from '../Helpers/Types';

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

        let loc: GeoDataTransfer = {
            location: '',
            zip: '',
            geoData : {
                lat: undefined,
                lon: undefined,
                name:'',
                state:'',
                country: ''
            }
        };

        this.state = {
            location: loc,
            weatherData: null,
            currentView: 'todayView'
        }

        this.viewComponent = <TodayView location={loc.location} weatherData={null} />;

        
        this.handleViewChange = this.handleViewChange.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    async getWeatherData(location: GeoDataTransfer) {
        let weatherData: AllWeather = await WeatherAPI.getAllWeather(location);
        if (weatherData !== null) {
            this.setState({ location, weatherData });

            this.viewComponent = this.selectView(this.state.currentView, location.location, weatherData);
                
            this.forceUpdate();
        }      
    }

    componentDidMount() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                let locObject: GeoDataTransfer = {
                    location: '',
                    zip: '',
                    geoData : {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        name:'',
                        state:'',
                        country: ''
                    }
                };

                this.getWeatherData(locObject);
            });
      
        } else {
      
            console.log("Geolocation not available.");
      
          }
        
    }

    selectView(view: string, location: string, weatherData: AllWeather): React.ReactElement {
        let element: React.ReactElement;

        switch(view) {
            case 'todayView': element = <TodayView location={location} weatherData={weatherData}/>;
                break;
            case 'hourlyView': element = <HourlyView location={location} weatherData={weatherData}/>;
                break;
            case 'dailyView': element = <DailyView location={location} weatherData={weatherData}/>;
                break;
            default: element = <TodayView location={location} weatherData={weatherData}/>;
        }

        return element;
    }

    handleSearchClick(location: string) {
        let formattedLocation: string, locObject: GeoDataTransfer;
        let zipPattern = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);

        if (location !== '') {
            formattedLocation = zipPattern.test(location) ? '' : formatLocation(location);

            locObject = {
                location: formattedLocation,
                geoData: {
                    lat: undefined,
                    lon: undefined,
                    name:'',
                    state:'',
                    country: ''
                },
                zip: zipPattern.test(location) ? location : ''
            };       
            
            
            this.setState({
                location: locObject            
            });
    
            this.getWeatherData(locObject);
        }        
    }

    handleViewChange(event) {
        let btnId = event.target.id;

        let currentView = btnId === 'hourly'
        ? 'hourlyView' : btnId === 'daily'
        ? 'dailyView' : btnId === 'maps'
        ? 'mapsView' : 'todayView';

        this.viewComponent = this.selectView(currentView, this.state.location.location, this.state.weatherData);
        this.setState({ currentView });
    }

    render() {
        return (
            <div id="weatherApp">
                <WeatherNav onViewChange={this.handleViewChange} onSearchClick={this.handleSearchClick} />
                <main className='viewContainer'>
                    { this.state.location.location }
                    {this.viewComponent}
                </main>
            </div>
        );
    };
}

export default Weather;