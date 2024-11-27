import React from "react";
import { render } from '@testing-library/react';
import DailyListItem from "../Components/DailyListItem";
import '@testing-library/jest-dom';
import { DailyWeather } from "../Helpers/Types";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let testContainer = null

beforeAll( () => {
    testContainer = document.createElement('div');
    document.body.appendChild(testContainer);
});

afterAll( () => {
    unmountComponentAtNode(testContainer)
    testContainer.remove();
    testContainer = null;
});


test('display weather data for specified day', async () => {
    const day: DailyWeather = {
        dt: 1,
        sunrise: 1,
        sunset: 1,
        moonrise: 1,
        moonset: 1,
        moon_phase: 1,
        temp: {
            day: 11,
            min: 11,
            max: 11,
            night: 11,
            eve: 11,
            morn: 11
        },
        feels_like: {
            day: 12,
            night: 12,
            eve: 12,
            morn: 12
        },
        pressure: 1,
        humidity: 1,
        dew_point: 1,
        wind_speed: 1,
        wind_deg: 1,
        weather: [
            {   id: 13,
                main: 'a',
                description: 'a',
                icon: 'a'
            }
        ],
        clouds: 1,
        pop: 1,
        rain: 1,
        uvi: 1
    }

    jest.spyOn(global, "fetch").mockImplementation(() => 
        Promise.resolve<any>(
            { 'json': () => Promise.resolve(day) }
        )    
    );

    await act( async () => {
        render(<DailyListItem day={day}/>)    
    });

    //expect(testContainer.querySelector("span.dayCardFeelsTemp").textContent).toBe(day.feels_like.day);
    //expect(testContainer.querySelector(".dayCardHigh .dayCardTemps").textContent).toBe(day.temp.max);
    
})