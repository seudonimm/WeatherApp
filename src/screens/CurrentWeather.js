import React, { useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    Pressable
} from 'react-native'
import  WeatherImage  from "../components/WeatherImage";
import  CityText  from "../components/CityText";
import TemperatureText from "../components/TemperatureText";
import WeatherDetailsBar from "../components/WeatherDetailsBar";
import HourlyWeatherPod from "../components/HourlyWeatherPod";
import { getWeather, getWeatherByCity } from "../services/WeatherServices";

/*import {
    WeatherImage,
    CityText
} from '../components/index'*/

const CurrentWeather = () => {


    const loadData = async() => {
        let weather = await getWeather('33.7501', '84.3885');
        console.log(weather);
        let cityWeather = await getWeatherByCity('atlanta');
        console.log(cityWeather);
    };

    useEffect(() => {
        loadData();

        return;
    },[]);

    return(
        <View>
            <View style={styles.containerTop}>
                <CityText text={"Atlanta"}/>
                <WeatherImage/>       
                <TemperatureText text={"29"}/>  
                <CityText text={"Cloudy"}/>
                <WeatherDetailsBar/>
            </View>
            <View style={styles.containerMiddle}>
                <CityText text={"Today"}/>
                <Pressable>
                    <CityText text={"7 days"}/>
                </Pressable>
            </View>
            <View style={styles.containerBottom}>
                <HourlyWeatherPod 
                    text1={"20"}
                    source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/sun.png')}
                    text2={"1000"}
                />
                <HourlyWeatherPod 
                    text1={"20"}
                    source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/sun.png')}
                    text2={"1000"}
                />
                <HourlyWeatherPod 
                    text1={"20"}
                    source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/sun.png')}
                    text2={"1000"}
                />
                <HourlyWeatherPod 
                    text1={"20"}
                    source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/sun.png')}
                    text2={"1000"}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerTop: {
        backgroundColor: 'blue',
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: '65%'
    },
    containerMiddle: {
        //backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //height: '25%'
    },
    containerBottom: {
        //backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        //height: '25%'
    }
});

export default CurrentWeather;