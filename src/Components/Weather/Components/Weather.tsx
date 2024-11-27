import React, { useEffect, useRef, useState } from 'react';
import WeatherAPI from '../API/WeatherAPI';
import '../weather.css';
import WeatherNav from './WeatherNav';
import TodayView from './TodayView';
import HourlyView from './HourlyView';
import DailyView from './DailyView';

import { formatLocation } from '../Helpers/StringUtils';
import { AllWeather, CurrentWeather, GeoDataTransfer,  } from '../Helpers/Types';
//import { ViewProps, WeatherStateTypes } from '../Helpers/Types';

/* High-Order Component since the views are similar */
// function withWeatherData(WrappedComponent, weatherData) {
//     return class extends React.Component<ViewProps , {}> {
//         render() {
//             return <WrappedComponent weatherData={weatherData} {...this.props} />
//         }
//     }
// }

function Weather(props) {
    const [loading, loadingSet] = useState<boolean>(true);
    const [location, locationSet] = useState<GeoDataTransfer | undefined>(undefined);
    const [weatherData, weatherDataSet] = useState<CurrentWeather | undefined>(undefined);
    const [currentView, currentViewSet] = useState<string>("todayView");
    const [viewComponent, viewComponentSet] = useState<Array<React.ReactElement>>([]);
    const memoRequestCount = useRef(0);

    useEffect( () => {
        loadingSet(true);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const locObject: GeoDataTransfer = {
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

                locationSet(locObject);
                loadingSet(false);
            });
        } else {
            console.log("Geolocation not available.");
        }
    }, []);

    useEffect(() => { 
            loadingSet(true);

            async function getWeatherData() {
                memoRequestCount.current += 1;

                if (location) {
                    const weather: CurrentWeather = await WeatherAPI.getAllWeather(location);
                    
                    if (weather !== null) {
                        weatherDataSet(weather);
                    }   

                    loadingSet(false);
                }
            };

            if (!(memoRequestCount.current > 10)) {
                getWeatherData();
            } else {
                console.log("ran 10 times");
            }
            
    }, [location]);

    useEffect(() => {
        let element: Array<React.ReactElement>;
        
        switch(currentView) {
            case 'hourlyView': element = [<HourlyView key={1} location={location} weatherData={weatherData}/>];
                break;
            case 'dailyView': element = [<DailyView key={1} location={location} weatherData={weatherData}/>];
                break;
            default: element = [
                <TodayView key={1} location={location} weatherData={weatherData}/>,
                <DailyView key={2} location={location} weatherData={weatherData}/>,
                <HourlyView key={3} location={location} weatherData={weatherData}/>
            ];
        }
        viewComponentSet(element);
    }, [location, weatherData, currentView]);
    
    const handleSearchClick = (location: string) => {
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
            
            locationSet(locObject);   
        }        
    }

    const handleViewChange = (event) => {
        let btnId = event.target.id;

        let currentView = btnId === 'hourly'
        ? 'hourlyView' : btnId === 'daily'
        ? 'dailyView' : btnId === 'maps'
        ? 'mapsView' : 'todayView';

        currentViewSet(currentView);
    }

    let options: Intl.DateTimeFormatOptions = { 
        month: 'short', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: true
    };

    let date = new Intl.DateTimeFormat('en-US', options).format(new Date());
    // let dailyComponent = null;
    // let hourlyComponent = null;

    if (weatherData !== undefined) {
        //options.timeZone = weatherData.timezone;
        date = new Intl.DateTimeFormat('en-US', options).format(new Date(weatherData.dt * 1000 * (weatherData.timezone / 3600 )));
        // dailyComponent = <DailyView location={this.state.location.location} weatherData={this.state.weatherData}/>
        // hourlyComponent = <HourlyView location={this.state.location.location} weatherData={this.state.weatherData}/>
    }

    return (
        <div id="weatherApp">
            <WeatherNav onViewChange={handleViewChange} onSearchClick={handleSearchClick} />
            <main className='viewContainer'>
                { loading
                ?   <main className='viewContainer'>
                        <h3>Loading...</h3>
                    </main>
                : <main className='viewContainer'>
                    <h2 className="location">{ location.location }</h2>
                    <h3 id="time">{date}</h3>
                    { viewComponent }
                  </main>
                }
            </main>
        </div>
    );
}

export default Weather;