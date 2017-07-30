import axios from 'axios';

const API_KEY = 'cd786318b1d66af98f037bcfc656e9c1';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	

	
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}