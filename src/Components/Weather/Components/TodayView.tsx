import React from 'react';
import { ViewProps } from '../Helpers/Types';



export default class TodayView extends React.Component< ViewProps,{}> {
    viewElement: any = 'no update';

    updateView() {
        
    }

    componentDidUpdate(prevProps) {
        this.updateView();
    }

    render() {
        const viewElement = this.props.weatherData;

        if (viewElement === null || viewElement === undefined) {
            console.log(viewElement);
            return "Today";
        } else {
            console.log(viewElement);
            return "No Location Yet";            
        }
    }
}