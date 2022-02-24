// hardcoding API KEY to be sure app works
const API_KEY = 'a31a2ce5a9cdacfc5dbc885f789360e7';


export type GeoObject = {
    lat: number,
    lon: number,
    name: string,
    state: string,
    country: string
}

export type WeatherObject = {
    coord: {
      lon: number,
      lat: number
    },
    weather: [
      {
        id: number,
        main: string,
        description: string,
        icon: string
      }
    ],
    base: string,
    main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number
    },
    visibility: number,
    wind: {
      speed: number,
      deg: number
    },
    clouds: {
      all: number
    },
    dt: number,
    sys: {
      type: number,
      id: number,
      message: number,
      country: string,
      sunrise: number,
      sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}             

const WeatherAPI = {

    getGeoCoordinates: function(location: string): Promise<Response> {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`;

        return fetch(url).then(
            response => {
                if (response.ok) {
                   return response.json();
                }
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
                }
            )
        });
    }
}

export default WeatherAPI;