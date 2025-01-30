import { useEffect, useState } from "react";
import { getRequestByFetch, getWeatherByCity } from "../services/WeatherServices";

const useWeather = cityName => {
    const [weatherState, setWeather] = useState(null);

    loadData = async() => {
        //const weatherState = await getWeatherByCity(cityName);
        const weatherState = await getRequestByFetch(cityName);
        await setWeather(weatherState);
        console.log(weatherState);
    }
    useEffect(
        ()=>{
            loadData();
        },[cityName]
    );
    return[weatherState];
};

export default useWeather;