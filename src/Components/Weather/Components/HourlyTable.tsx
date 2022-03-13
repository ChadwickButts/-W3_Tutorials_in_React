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
            <table>
                <thead>
                    <tr>
                        <td>temps</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            </section>
        )        
    }
}

export default HourlyTable;