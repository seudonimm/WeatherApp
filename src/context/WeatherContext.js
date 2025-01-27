import { createContext, useState } from "react";

export const WeatherContext = createContext();


const WeatherContextProvider = props => {
    
    const [weather, setWeather] = useState();

    const {children} = props;

    return(
        <WeatherContext.Provider value={{weather, setWeather}}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContextProvider;