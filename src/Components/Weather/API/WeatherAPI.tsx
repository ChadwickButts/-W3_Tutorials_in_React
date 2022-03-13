import { AllWeather, GeoDataTransfer } from '../Helpers/Types';

// hardcoding API KEY to be sure app works
const API_KEY = 'a31a2ce5a9cdacfc5dbc885f789360e7';


const WeatherAPI = {

    asyncGetGeoCoordinates: async function(geoObject: GeoDataTransfer) {
        let geoDataPromise;
        let geoData;

        try {
            if (geoObject.geoData.lat !== undefined && geoObject.geoData.lon !== undefined) {
                
                geoDataPromise = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${geoObject.geoData.lat}&lon=${geoObject.geoData.lon}&limit=5&appid=${API_KEY}`).catch( error => console.log );
                geoData = await geoDataPromise.json(); 
                geoData = geoData[0];       
            } else {
                if (geoObject.zip !== '') {
                    geoDataPromise = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${geoObject.zip}&limit=5&appid=${API_KEY}`).catch( error => console.log );
                    geoData = await geoDataPromise.json();   
                } else {
                    geoDataPromise = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${geoObject.location}&limit=5&appid=${API_KEY}`).catch( error => console.log );
                    geoData = await geoDataPromise.json();
                    const {local_names, ...geoProps} = geoData[0];
                
                    geoData = geoProps;
                }            
            }
        } catch {
            console.log('invalid location');
        }

        geoObject.geoData = geoData;

        geoObject.location = geoData.name 
        + ((geoData.state !== undefined) ?  ', ' + geoData.state : '')
        + ', ' + geoData.country;
        
        return geoObject;
    },

    getAllWeather: async function(location: GeoDataTransfer) {
        let weatherDataRequest, weatherData: AllWeather, url;
        let geoCoords: GeoDataTransfer = await this.asyncGetGeoCoordinates(location);
        
        url = `https://api.openweathermap.org/data/2.5/onecall?lat=${geoCoords.geoData.lat}&lon=${geoCoords.geoData.lon}&units=imperial&appid=${API_KEY}`;
        
        try {
            weatherDataRequest = await fetch(url).catch( error => console.log );
            weatherData = await weatherDataRequest.json();
        } catch {
            console.log('invalid location');
        }
        return weatherData;       
    }
}

export default WeatherAPI;