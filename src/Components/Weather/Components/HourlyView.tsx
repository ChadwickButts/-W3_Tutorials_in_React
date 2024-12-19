import { HourlyWeather } from '../Helpers/Types';
import HourlyTable from './HourlyTable';

function HourlyView(props) {
     if (props.weatherData === null) {
         return (
            <span>No Data</span>
         );
     } else {
         const hourlyWeather: Array<HourlyWeather> = props.weatherData.hourly;

         if (hourlyWeather !== undefined) {
             return (
                 <HourlyTable hourlyData={hourlyWeather}></HourlyTable>
             );
         } else {
             return (
                 <div>Data is unavailable.</div>
             )
         }
     }
}

export default HourlyView;