import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import WeatherImage from "../components/WeatherImage";
import TemperatureText from "../components/TemperatureText";
import WeatherTextAndImage from "../components/WeatherTextAndImage";
import WeatherDetailsBar from "../components/WeatherDetailsBar";
import { CityText } from "../components";
import ForecastListItemBox from "../components/ForecastListItemBox";

import LinearGradient from "react-native-linear-gradient";
import { BLUE, DARK_BLUE, SKY_BLUE } from "../res/colors";
import { useRoute } from "@react-navigation/native";
import useWeather from "../hooks/useWeather";
//import { useWeatherContext } from "../store/context/WeatherContext";

const DailyForecast = (props) => {
    //const {state:weather} = useWeatherContext();
    //const route = useRoute();
    //const weather = route.params.weather;

    const [weather, setWeather] = useState();
    //const weather = useContext(WeatherContext);

    const [weatherState] = useWeather('Chicago');

    const [wind, setWind] = useState();
    const [humidity, setHumidity] = useState();
    const [rainChance, setRainChance] = useState();

    const [day1Temp, setDay1Temp] = useState();
    const [day2Temp, setDay2Temp] = useState();
    const [day3Temp, setDay3Temp] = useState();
    const [day4Temp, setDay4Temp] = useState();
    const [day5Temp, setDay5Temp] = useState();

    const [day1Sky, setDay1Sky] = useState();
    const [day2Sky, setDay2Sky] = useState();
    const [day3Sky, setDay3Sky] = useState();
    const [day4Sky, setDay4Sky] = useState();
    const [day5Sky, setDay5Sky] = useState();

    const [day1Image, setDay1Image] = useState();
    const [day2Image, setDay2Image] = useState();
    const [day3Image, setDay3Image] = useState();
    const [day4Image, setDay4Image] = useState();
    const [day5Image, setDay5Image] = useState();

    const [day, setDay] = useState();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const loadData = async() => {
        setWeather(weatherState)
        console.log("[please");
        console.log("here")

        //let cityWeather = await getWeatherByCity('atlanta');

        console.log("set");

        //setWeather(cityWeather)

        console.log(weatherState);

        setWind(weather.data.list[9].wind.speed.toString());
        setHumidity(weather.data.list[9].main.humidity.toString());
        setRainChance(weather.data.list[9].pop);

        setDay1Temp(weather.data.list[9].main.temp);
        setDay1Sky(weather.data.list[9].weather[0].main);
        setDay1Image(weather.data.list[9].weather[0].icon)

        setDay2Temp(weather.data.list[18].main.temp);
        setDay2Sky(weather.data.list[18].weather[0].main);
        setDay2Image(weather.data.list[18].weather[0].icon)

        setDay3Temp(weather.data.list[27].main.temp);
        setDay3Sky(weather.data.list[27].weather[0].main);
        setDay3Image(weather.data.list[27].weather[0].icon)

        setDay4Temp(weather.data.list[36].main.temp);
        setDay4Sky(weather.data.list[36].weather[0].main);
        setDay4Image(weather.data.list[36].weather[0].icon)

        setDay5Temp(weather.data.list[39].main.temp);
        setDay5Sky(weather.data.list[39].weather[0].main);
        setDay5Image(weather.data.list[39].weather[0].icon)

        let date = new Date(weather.data.list[9].dt_txt.slice(0, 10));
        setDay(date.getDay());
        

        console.log("set2");
    };

    useEffect(() => {
        loadData();
    }, [weatherState, weather]);

    return (
        <View style={styles.containerSupreme}>
            <LinearGradient colors={[SKY_BLUE, BLUE]} style={styles.topContainer}>
                <CityText text={"5 Days"}/>
                <WeatherTextAndImage
                    text1={"Tommorow"}
                    text2={Math.round(day1Temp) + '°'}
                    text3={"Cloudy"}
                    source={{uri:`https://openweathermap.org/img/wn/${day1Image}@4x.png`}}
                />
                <WeatherDetailsBar
                    windSpeed={wind}
                    humidity={humidity}
                    rainChance={rainChance}
                />
            </LinearGradient>
            <View>
                <ForecastListItemBox
                    day={days[day]}
                    weatherText={day1Sky}
                    source={{uri:`https://openweathermap.org/img/wn/${day1Image}@4x.png`}}
                    temp={Math.round(day1Temp) + '°'}
                />
                <ForecastListItemBox
                    day={days[day+1]}
                    weatherText={day2Sky}
                    source={{uri:`https://openweathermap.org/img/wn/${day2Image}@4x.png`}}
                    temp={Math.round(day2Temp) + '°'}
                />
                <ForecastListItemBox
                    day={days[day+2]}
                    weatherText={day3Sky}
                    source={{uri:`https://openweathermap.org/img/wn/${day3Image}@4x.png`}}
                    temp={Math.round(day3Temp) + '°'}
                />
                <ForecastListItemBox
                    day={days[day+3]}
                    weatherText={day4Sky}
                    source={{uri:`https://openweathermap.org/img/wn/${day4Image}@4x.png`}}
                    temp={Math.round(day4Temp) + '°'}
                />
                <ForecastListItemBox
                    day={days[day+4]}
                    weatherText={day5Sky}
                    source={{uri:`https://openweathermap.org/img/wn/${day5Image}@4x.png`}}
                    temp={Math.round(day5Temp) + '°'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerSupreme: {
        backgroundColor: DARK_BLUE,
        flex: 1
    },
    topContainer: {
        backgroundColor: 'blue',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
});

export default DailyForecast;