import React from "react";
import { Image, StyleSheet, View } from 'react-native';

const WeatherImage = () => {

    return (
            <Image 
                style={styles.imageStyle}
                source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/sun.png')}
            />
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        height: '40%',
        width: '40%'
    }
});

export default WeatherImage;