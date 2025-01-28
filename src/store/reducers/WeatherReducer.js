import { getWeatherByCity } from "../../services/WeatherServices";
import { CLEAR_WEATHER, COMPLETE_WEATHER_LOADING, SET_WEATHER, START_WEATHER_LOADING } from "../ActionTypes";

const WeatherReducer = (state, action) => {
    switch(action.type){
        case SET_WEATHER:
            let newState = {...state};//states are immutable and cant change so should be assigned to a newstate variable
            newState.data = action.payload;
            newState.loading = false;
            return newState;
        case CLEAR_WEATHER:
            return{
                loading : false,
                data : null
            };
        case START_WEATHER_LOADING:
            return{
                ...state,
                loading: true
            }
        case COMPLETE_WEATHER_LOADING:
            return{
                ...state,
                loading: false
            }
        default:
            return;
    }
}

export default WeatherReducer;