import React from "react";
import { 
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';


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
        height: '60%',
        borderRadius: 10,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1%'
    },
    imageStyle: {
        width: 10,
        height: 10
    },
    textStyle: {
        textAlign: 'center'
    }
});

export default HourlyWeatherPod;