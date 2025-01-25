import React from "react";
import { StyleSheet, View } from 'react-native';
import WeatherImage from "./WeatherImage";
import TemperatureText from "./TemperatureText";
import CityText from "./CityText";


const WeatherTextAndImage = props => {
    const {text1, text2, text3} = props;
    
    return (
        <View style={styles.container}>
            <WeatherImage/>
            <View>
                <CityText text={text1}/>
                <TemperatureText text={text2}/>
                <CityText text={text3}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default WeatherTextAndImage;