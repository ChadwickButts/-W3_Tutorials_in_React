import React from 'react';
import { ViewProps } from '../Helpers/Types';

export default class DailyView extends React.Component<ViewProps,{}> {
    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {

        }
    }

    render() {
        let uiChange = this.props.weatherData?.daily[0].weather[0].description;

        if (this.props.weatherData === null) {
            uiChange = 'no data';
        }

        return  (
            <div>
                <h3>Today it is: {uiChange}</h3>
            </div>
        );
    }
}