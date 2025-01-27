import React from "react";
import { Image, StyleSheet, View } from 'react-native';

const WeatherImage = props => {

    return (
            <Image 
                style={props.style}
                source={props.source}
            />
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        height: '45%',
        width: '50%',
    }
});

export default WeatherImage;