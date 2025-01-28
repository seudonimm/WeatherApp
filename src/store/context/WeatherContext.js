import { createContext, useState, useContext, useReducer } from "react";
import WeatherReducer from "../reducers/WeatherReducer";
import { CLEAR_WEATHER, SET_WEATHER, START_WEATHER_LOADING } from "../ActionTypes";
import { getWeatherByCity } from "../../services/WeatherServices";

export const WeatherContext = createContext();

let initialState = {
    loading: false,
    data: null
};

const WeatherContextProvider = props => {
    const {children} = props;

    const [state, dispatch] = useReducer(WeatherReducer, initialState);
    //const [weather, setWeather] = useState();

    const loadWeather = async city => {
        dispatch({type: START_WEATHER_LOADING});
        let res = await getWeatherByCity(city);
        dispatch({type: SET_WEATHER, payload: res.data});
    };

    const clearWeather = () => {
        dispatch({type: CLEAR_WEATHER});
    };

    return(
        <WeatherContext.Provider value={{state, loadWeather, clearWeather}}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeatherContext = () => {
    return useContext(WeatherContext);
}
export default WeatherContextProvider;