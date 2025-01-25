import React from "react";
import { 
    Image, 
    StyleSheet,
    View
} from 'react-native';
import ImageAndText from "./ImageAndText";

const WeatherDetailsBar = () => {


    return(
        <View style={styles.barStyle}>
            {/*<Image style={styles.imageStyle} source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/wind.png')}/>
            <Image style={styles.imageStyle} source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/drop.png')}/>
            <Image style={styles.imageStyle} source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/rain.png')}/>*/}
            
            <ImageAndText
                source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/wind.png')}
                text1={"13 km/h"}
                text2={"Wind"}
            />
            <ImageAndText
                source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/drop.png')}
                text1={"24%"}
                text2={"Humidity"}
            />
            <ImageAndText
                source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/rain.png')}
                text1={"82%"}
                text2={"Chance of Rain"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    barStyle: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        borderTopWidth: 1,
        marginHorizontal: 20,
    },
    imageStyle: {
        width: '10%',
        height: '10%'
    },
});

export default WeatherDetailsBar;