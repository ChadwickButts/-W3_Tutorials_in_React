import { useState } from 'react';
import { DailyWeather } from '../Helpers/Types';
import DailyListItem from './DailyListItem';

function DailyView(props) {
    const dailyWeather: any = props.weatherData.daily;
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

    if (dailyWeather !== undefined) {
        const days = dailyWeather.map((day: DailyWeather, i) => {
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
    }  else {
        return (
            <div>Data is unavailable.</div>
        )
    }
    

}

export default DailyView;