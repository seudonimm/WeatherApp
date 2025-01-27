import React, { createContext, useCallback, useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    Pressable,
    TextInput
} from 'react-native'
import  WeatherImage  from "../components/WeatherImage";
import  CityText  from "../components/CityText";
import TemperatureText from "../components/TemperatureText";
import WeatherDetailsBar from "../components/WeatherDetailsBar";
import HourlyWeatherPod from "../components/HourlyWeatherPod";
import { getWeather, getWeatherByCity } from "../services/WeatherServices";
import { useNavigation } from "@react-navigation/native";
import DailyForecast from "./DailyForecast";
import LinearGradient from "react-native-linear-gradient";
import HorizontalImageAndText from "../components/HorizontalImageAndText";
import { BLUE, DARK_BLUE, SKY_BLUE } from "../res/colors";


/*import {
    WeatherImage,
    CityText
} from '../components/index'*/

const CurrentWeather = (props) => {

    const navigation = useNavigation();

    const [weather, setWeather] = useState();
    const [currTemp, setCurrTemp] = useState();
    const [currSky, setCurrSky] = useState();
    const [currWeatherImage, setCurrentWeatherImage] = useState();

    //const WeatherContext = createContext();

    const [wind, setWind] = useState();
    const [humidity, setHumidity] = useState();
    const [rainChance, setRainChance] = useState();

    const [p1Temp, setP1Temp] = useState();
    const [p2Temp, setP2Temp] = useState();
    const [p3Temp, setP3Temp] = useState();
    const [p4Temp, setP4Temp] = useState();

    const [p1Time, setP1Time] = useState();
    const [p2Time, setP2Time] = useState();
    const [p3Time, setP3Time] = useState();
    const [p4Time, setP4Time] = useState();

    const [p1Image, setP1Image] = useState();
    const [p2Image, setP2Image] = useState();
    const [p3Image, setP3Image] = useState();
    const [p4Image, setP4Image] = useState();

    const [cityText, setCityText] = useState("Atlanta");

    const loadData = useCallback(async() => {
        console.log("[please")
        setWeather(null);
        let cityWeather = await getWeatherByCity(cityText);
        setWeather(cityWeather);
        console.log(cityWeather);

        //to do : if weather loads then set everything

        setCurrTemp(weather.data.list[0].main.temp);
        setCurrSky(weather.data.list[0].weather[0].main);
        setCurrentWeatherImage(weather.data.list[0].weather[0].icon)

        setWind(weather.data.list[0].wind.speed.toString());
        setHumidity(weather.data.list[0].main.humidity.toString());
        setRainChance(weather.data.list[0].pop);

        setP1Temp(weather.data.list[0].main.temp);
        setP1Time(weather.data.list[0].dt_txt.slice(11, 16));
        setP1Image(weather.data.list[0].weather[0].icon);

        setP2Temp(weather.data.list[1].main.temp);
        setP2Time(weather.data.list[1].dt_txt.slice(11, 16));
        setP2Image(weather.data.list[1].weather[0].icon);

        setP3Temp(weather.data.list[2].main.temp);
        setP3Time(weather.data.list[2].dt_txt.slice(11, 16));
        setP3Image(weather.data.list[2].weather[0].icon);

        setP4Temp(weather.data.list[3].main.temp);
        setP4Time(weather.data.list[3].dt_txt.slice(11, 16));
        setP4Image(weather.data.list[3].weather[0].icon);


    },[cityText, weather])

    useEffect(() => {
        if(weather){
            setCurrTemp(weather.data.list[0].main.temp);
            setCurrSky(weather.data.list[0].weather[0].main);
            setCurrentWeatherImage(weather.data.list[0].weather[0].icon)

            setWind(weather.data.list[0].wind.speed.toString());
            setHumidity(weather.data.list[0].main.humidity.toString());
            setRainChance(weather.data.list[0].pop);

            setP1Temp(weather.data.list[0].main.temp);
            setP1Time(weather.data.list[0].dt_txt.slice(11, 16));
            setP1Image(weather.data.list[0].weather[0].icon);

            setP2Temp(weather.data.list[1].main.temp);
            setP2Time(weather.data.list[1].dt_txt.slice(11, 16));
            setP2Image(weather.data.list[1].weather[0].icon);

            setP3Temp(weather.data.list[2].main.temp);
            setP3Time(weather.data.list[2].dt_txt.slice(11, 16));
            setP3Image(weather.data.list[2].weather[0].icon);

            setP4Temp(weather.data.list[3].main.temp);
            setP4Time(weather.data.list[3].dt_txt.slice(11, 16));
            setP4Image(weather.data.list[3].weather[0].icon);
        }
    }, [weather]);

    const OnForecastPress = () => {
        navigation.navigate("DailyForecast", {
            weather: weather
        });
    };

    return(
        <View style={styles.containerSupreme}>
            <LinearGradient colors={[SKY_BLUE, BLUE]} style={styles.containerTop}>
                    <SafeAreaView style={styles.textInputViewStyle}>
                        <Image style={styles.locationIconImageStyle}
                            source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/location.png')}    
                        />
                        <TextInput style={styles.textInputStyle}
                            onChangeText={text=>setCityText(text)}
                            value={cityText}
                        />
                    </SafeAreaView>
                    <Pressable style={styles.updateButtonStyle}
                        onPress={()=>loadData({cityText})}
                    >
                        <Text>
                            Update
                        </Text>
                    </Pressable>
                    <WeatherImage
                        style={{height: '45%', width: '50%'}}
                        source={{uri:`https://openweathermap.org/img/wn/${currWeatherImage}@4x.png`}}
                    />  
                    <TemperatureText text={Math.round(currTemp) + '°'}/>  
                    <Text style={styles.weatherDescriptorTextStyle}>
                        {currSky}
                    </Text>
                    <WeatherDetailsBar
                        windSpeed={wind}
                        humidity={humidity}
                        rainChance={rainChance}
                    />
            </LinearGradient>
            <View style={styles.containerMiddle}>
                <CityText text={"Today"}/>
                <Pressable
                    onPress={OnForecastPress}
                >
                    <CityText text={"7 days"}/>
                </Pressable>
            </View>
            <View style={styles.containerBottom}>
                <HourlyWeatherPod 
                    text1={Math.round(p1Temp) + '°'}
                    source={{uri:`https://openweathermap.org/img/wn/${p1Image}@4x.png`}}
                    text2={p1Time}
                />
                <HourlyWeatherPod 
                    text1={Math.round(p2Temp) + '°'}
                    source={{uri:`https://openweathermap.org/img/wn/${p2Image}@4x.png`}}
                    text2={p2Time}
                />
                <HourlyWeatherPod 
                    text1={Math.round(p3Temp) + '°'}
                    source={{uri:`https://openweathermap.org/img/wn/${p3Image}@4x.png`}}
                    text2={p3Time}
                />
                <HourlyWeatherPod 
                    text1={Math.round(p4Temp) + '°'}
                    source={{uri:`https://openweathermap.org/img/wn/${p4Image}@4x.png`}}
                    text2={p4Time}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerSupreme: {
        backgroundColor: DARK_BLUE
    },
    containerTop: {
        backgroundColor: 'blue',
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: '70%',
    },
    containerMiddle: {
        //backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //height: '25%'
        margin: '5%'
    },
    containerBottom: {
        //backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        //height: '25%'
    },
    updateButtonStyle: {
        borderWidth: 1,
        borderRadius: 20,
        height: 25,
        width: 70,
        alignItems: 'center',
        margin: '1%',
        borderColor: 'white'
    },
    textInputStyle:{
        borderWidth: 1,
        borderRadius: 20,
        width: '80%',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: 'white'
    },
    textInputViewStyle: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    locationIconImageStyle: {
        height: 25,
        width: 25
    },
    weatherDescriptorTextStyle: {
        color: 'yellow',
        fontSize: 30
    }
});

export default CurrentWeather;