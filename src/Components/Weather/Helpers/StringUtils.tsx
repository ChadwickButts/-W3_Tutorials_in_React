import { StateCodes } from "./StateCodes";

export function formatLocation(location: string): string {
    let formattedLocation = '';
    
    if (location !== '') {
        let [city, state, country] = location.split(',');

        formattedLocation = city.toLowerCase().trim()
            + (state ? ', ' + StateCodes[state.toLowerCase().trim()] : '')
            + (country ? ', ' + country.trim() : '');

    } 
    
    return formattedLocation;
}