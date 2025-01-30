import axios from "axios";
import { WEATHER_API_KEY } from "../res/strings";

export const getWeather = async(lat, lon) => {

    try {
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);

        return {sucess: true, data: res.data};
    } catch (e) {
        console.log(e);
        return {sucess: false, data: null};
    }
};

export const getWeatherByCity = async(city) => {
    try {
        let res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=imperial`);

        return {sucess: true, data: res.data};
    } catch (e) {
        console.log(e);

        return {sucess: false, data: null};
    }
};

export const getRequestByFetch = async city => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=imperial`)
        .then(response => response.json())
        .then(data => console.log("WeatherDataUsingFetch", data))
        .catch(e => console.log("Error", e));
}