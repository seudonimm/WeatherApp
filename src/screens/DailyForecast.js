import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import WeatherImage from "../components/WeatherImage";
import TemperatureText from "../components/TemperatureText";
import WeatherTextAndImage from "../components/WeatherTextAndImage";
import WeatherDetailsBar from "../components/WeatherDetailsBar";
import { CityText } from "../components";
import ForecastListItemBox from "../components/ForecastListItemBox";

const DailyForecast = () => {
    

    return (
        <View>
            <View style={styles.topContainer}>
                <CityText text={"7 Days"}/>
                <WeatherTextAndImage
                    text1={"Tommorow"}
                    text2={"24/17"}
                    text3={"Cloudy"}
                />
                <WeatherDetailsBar/>
            </View>
            <View>
                <ForecastListItemBox
                    day={"Monday"}
                    weatherText={"Cloudy"}
                    temp={"27"}
                />
                <ForecastListItemBox
                    day={"Monday"}
                    weatherText={"Cloudy"}
                    temp={"27"}
                />
                <ForecastListItemBox
                    day={"Monday"}
                    weatherText={"Cloudy"}
                    temp={"27"}
                />
                <ForecastListItemBox
                    day={"Monday"}
                    weatherText={"Cloudy"}
                    temp={"27"}
                />
                <ForecastListItemBox
                    day={"Monday"}
                    weatherText={"Cloudy"}
                    temp={"27"}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: 'blue',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
});

export default DailyForecast;