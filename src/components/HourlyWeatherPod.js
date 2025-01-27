import React from "react";
import { 
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { BLUE } from "../res/colors";


const HourlyWeatherPod = props => {
    const {text1, text2} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                {text1}
            </Text>
            <Image style={styles.imageStyle} source={props.source}/>
            <Text style={styles.textStyle}>
                {text2}
            </Text>
        </View>
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