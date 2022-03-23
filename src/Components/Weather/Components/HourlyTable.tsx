import React from 'react';
import { HourlyWeather } from '../Helpers/Types';
import HourlyListItem from './HourlyListItem';


class HourlyTable extends React.Component< { hourlyData: Array<HourlyWeather> } ,{}> {

    render() {
        const rows = this.props.hourlyData.map( (data: HourlyWeather, i) => {
            return (
                <HourlyListItem key={i} hourData={data} />
            );         
        });
        return (
            <section className="currentSection" >
            <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temperature</th>
                        <th>Conditions</th>
                        {/* <th>Description</th> */}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </div>
            </section>
        )        
    }
}

export default HourlyTable;