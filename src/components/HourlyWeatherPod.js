import React from "react";
import { 
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { BLUE, SKY_BLUE, DARK_BLUE } from "../res/colors";
import LinearGradient from "react-native-linear-gradient";


const HourlyWeatherPod = props => {
    const {text1, text2} = props;

    return (
        <LinearGradient colors={[SKY_BLUE, BLUE]} style={styles.container}>
            <Text style={styles.textStyle}>
                {text1}
            </Text>
            <Image style={styles.imageStyle} source={props.source}/>
            <Text style={styles.textStyle}>
                {text2}
            </Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '20%',
        height: '45%',
        borderRadius: 20,
        backgroundColor: BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1%'
    },
    imageStyle: {
        width: 80,
        height: 80
    },
    textStyle: {
        textAlign: 'center',
        color: 'white'
    }
});

export default HourlyWeatherPod;