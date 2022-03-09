export type ViewProps = {
    location: string,
    weatherData: any
}

export type SearchBarPropTypes = {
    onSearchClick: (location: string) => void
}

export type NavPropTypes = {
    onViewChange: React.ChangeEventHandler<MouseEvent>, 
    onSearchClick: (location: string) => void
}

export type WeatherStateTypes = {
    location: GeoDataTransfer, 
    weatherData: Object,
    currentView: string
}

export type GeoData = {
  lat: number,
  lon: number,
  name: string,
  state: string,
  country: string,
}  

export type GeoDataTransfer = {
  geoData: GeoData,
  location: string,
  zip: string
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
