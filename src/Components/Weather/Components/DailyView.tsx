import React from 'react';
import { ViewProps } from '../Helpers/Types';

export default class DailyView extends React.Component<ViewProps,{}> {
    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {

        }
    }

    render() {
        return 'daily';
    }
}