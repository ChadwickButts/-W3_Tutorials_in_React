import React from 'react';
import { DailyWeather, ViewProps } from '../Helpers/Types';
import DailyListItem from './DailyListItem';

class DailyView extends React.Component<ViewProps,{ activeDayCard: number }> {
    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = {
            activeDayCard: undefined
        }

    }

    handleItemClick(event) {
        if (this.state.activeDayCard !== undefined) {
            let lastCard = document.getElementById("btn-" + this.state.activeDayCard);
            lastCard.firstElementChild.classList.toggle("active");
        }

        event.currentTarget.firstChild.classList.toggle("active");
        
        this.setState({
            activeDayCard: +event.currentTarget.id.charAt(event.currentTarget.id.length - 1)
        });        
    }

    render() {
        const days = this.props.weatherData.daily.map( (day: DailyWeather, i) => {
            return (
                <button key={i} id={"btn-" + i} className="dayCardBtn" type="button" onClick={this.handleItemClick}>
                    <DailyListItem day={day} />
                </button>
            );
        });

        const activeDay = this.state.activeDayCard; 
        
        return  (
            <section className="currentSection" >
                <div className="dayContainer">
                    <h3>8-Day Weather Forecast</h3>
                    <div className="dayHorizontal">
                        { days }
                    </div>
                    {/* <div>
                        Active day is {activeDay}
                    </div> */}
                </div>
            </section>
        );        
    }
}

export default DailyView;