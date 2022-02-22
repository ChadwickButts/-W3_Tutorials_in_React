import React from 'react';
import './weather.css';
import WeatherNav from './WeatherNav';

class TodayView extends React.Component<{},{}> {
    render() {
        return 'Today';
    }
}

class HourlyView extends React.Component<{},{}> {
    render() {
        return 'hourly';
    }
}

class DailyView extends React.Component<{},{}> {
    render() {
        return 'daily';
    }
}

class Maps extends React.Component<{},{}> {
    render() {
        return 'maps';
    }
}

class Weather extends React.Component<{}, { location: string, currentView: React.ReactElement }> {
    constructor(props: Object) {
        super(props);

        this.state = {
            location: '',
            currentView: <TodayView />
        }

        this.handleViewChange = this.handleViewChange.bind(this);
    }

    handleViewChange(event) {
        let btnId = event.target.id;

        let currentView = btnId === 'hourly'
        ? <HourlyView /> : btnId === 'daily'
        ? <DailyView /> : btnId === 'maps'
        ? <Maps /> : <TodayView />

        this.setState({ currentView })
    }

    render() {
        return (
            <div id="weatherApp">
                <WeatherNav onViewChange={this.handleViewChange} />
                <main>
                    {this.state.currentView}
                </main>
            </div>
        );
    };
}

export default Weather;