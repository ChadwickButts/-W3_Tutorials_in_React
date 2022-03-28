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

export function memoizeAPI(f) {
    const cache = new Map();

    return function memoized(url) {

        if (cache.has(url)) {
            return cache.get(url);
        } else {
            let result = f.call(this, url);
            cache.set(url, result);
            return result;
        }
    }
}