import { HourlyWeather, ViewProps } from '../Helpers/Types';
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

/*
export default class HourlyView extends React.Component< ViewProps,{}> {
    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            
        }
    }

    render() {
        if (this.props.weatherData === null) {
            return 'no data';
        } else {
            const hourlyWeather: Array<HourlyWeather> = this.props.weatherData.hourly;

            if (hourlyWeather !== undefined) {
                return  (                    
                    <HourlyTable hourlyData={hourlyWeather}></HourlyTable>                    
                );
            } else {
                return (
                    <div>Do Better</div>
                )
            }
        } 
    }
}*/