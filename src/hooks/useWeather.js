import { useEffect, useState } from "react";
import { getWeatherByCity } from "../services/WeatherServices";

const useWeather = cityName => {
    const [weatherState, setWeather] = useState(null);

    loadData = async() => {
        const weatherState = await getWeatherByCity(cityName);
        setWeather(weatherState);
    }
    useEffect(
        ()=>{
            loadData();
        },[cityName]
    );
    return[weatherState];
};

export default useWeather;