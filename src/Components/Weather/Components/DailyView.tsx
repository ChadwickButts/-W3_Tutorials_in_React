import { useState } from 'react';
import { DailyWeather } from '../Helpers/Types';
import DailyListItem from './DailyListItem';

function DailyView(props) {
    const [state, setState] = useState({
        activeDayCard: undefined
    });

    const handleItemClick = (event) => {
        if (state.activeDayCard !== undefined) {
            let lastCard = document.getElementById("btn-" + state.activeDayCard);
            lastCard.firstElementChild.classList.toggle("active");
        }

        event.currentTarget.firstChild.classList.toggle("active");
        setState({
            activeDayCard: +event.currentTarget.id.charAt(event.currentTarget.id.length - 1)
        });
    }

    const days = props.weatherData.daily.map((day: DailyWeather, i) => {
        return (
            <button key={i} id={"btn-" + i} className="dayCardBtn" type="button" onClick={handleItemClick}>
                <DailyListItem day={day} />
            </button>
        );
    });

    return (
        <section className="currentSection" >
            <div className="dayContainer">
                <h3>8-Day Weather Forecast</h3>
                <div className="dayHorizontal">
                    {days}
                </div>
                {/* <div>
                    Active day is {activeDay}
                </div>  */}
            </div>
        </section>
    );

}


/*
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
                        { <div>
                            Active day is {activeDay}
                        </div> }
                    </div>
                </section>
            );        
        }
    }
*/
export default DailyView;