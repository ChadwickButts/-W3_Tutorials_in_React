export type ViewProps = {
    location: string,
    weatherData: AllWeather
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
    weatherData: AllWeather,
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
  id: number,
  main: string,
  description: string,
  icon: string
}

export type Temp = {
  day: number,
  min: number,
  max: number,
  night: number,
  eve: number,
  morn: number
}

export type FeelsLike = {
    day: number,
    night: number,
    eve: number,
    morn: number
}

export type Alerts = {
  sender_name: string,
  event: string,
  start: number,
  end: number,
  description: string,
  tags: Array<string>
}

export type MinutelyWeather = {
  dt: number,
  precipitation: number
}

export type HourlyWeather = {
    dt: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_deg: number,
    wind_gust: number,
    weather: Array<WeatherObject>
    pop: number
}

export type DailyWeather = {
    dt: number,
    sunrise: number,
    sunset: number,
    moonrise: number,
    moonset: number,
    moon_phase: number,
    temp: Temp,
    feels_like: FeelsLike,
    pressure: number,
    humidity: number,
    dew_point: number,
    wind_speed: number,
    wind_deg: number,
    weather: Array<WeatherObject>,
    clouds: number,
    pop: number,
    rain: number,
    uvi: number
}

export type CurrentWeather = {
  dt: number,
  sunrise: number,
  sunset: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  dew_point: number,
  uvi: number,
  clouds: number,
  visibility: number,
  wind_speed: number,
  wind_deg: number,
  weather: Array<WeatherObject>
}

export type AllWeather = {
  alerts: Array<Alerts>
  current: CurrentWeather,
  daily: Array<DailyWeather>,
  hourly: Array<HourlyWeather>,
  lat: number,
  lon: number,
  minutely: Array<MinutelyWeather>,
  timezone: string,
  timezone_offset: number,
}             
