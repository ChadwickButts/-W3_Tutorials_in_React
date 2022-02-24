import { StateCodes } from "./StateCodes";

export function formatLocation(location: string): string {
    let formattedLocation = '';
    
    if (location !== '') {
        let [city, state, country] = location.split(',');

        city = city.toLowerCase().trim();
        state = StateCodes[state.toLowerCase().trim()];
        if (country === undefined) {
            country = 'US'
        }

        formattedLocation = city + ',' + state + ',' + country;
    }

    return formattedLocation;
}