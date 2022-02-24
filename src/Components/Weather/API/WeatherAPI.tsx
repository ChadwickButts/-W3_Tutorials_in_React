import { GeoObject } from '../Helpers/Types';

// hardcoding API KEY to be sure app works
const API_KEY = 'a31a2ce5a9cdacfc5dbc885f789360e7';


const WeatherAPI = {

    getGeoCoordinates: function(location: string): Promise<Response> {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`;

        return fetch(url).then(
            response => {
                if (response.ok) {
                   return response.json();
                }
            },
            error => {
                return error;
            }
        )
    },

    getAllWeather: function(location: string): Promise<Response> {
        
        return this.getGeoCoordinates(location).then((data: Array<GeoObject>) => { 
            let [city, state, country] = location.split(',');
            let index = data.findIndex((geo:GeoObject) => geo.name.toLowerCase() === city && geo.state === state && geo.country === country);
            let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${data[index].lat}&lon=${data[index].lon}&exclude=&appid=${API_KEY}`;

            return url;
        }).then( url => {
            return fetch(url).then(
                response => {
                    if (response.ok) {
                        return response.json();
                    }
                },
                error => {
                    return error;
                }
            )
        });
    }
}

export default WeatherAPI;