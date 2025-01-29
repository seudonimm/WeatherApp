import { PlatformPressable } from "@react-navigation/elements";
import React from "react";
import {
    Image,
    ImageBackground,
    View,
    Text,
    StyleSheet
} from 'react-native';

const Header = props => {
    const {text} = props;

    return (
        <View
            style={props.style}
        >
            <ImageBackground
                style={styles.imageStyle}
                source={require('/Users/jusman/Documents/Training/Projects/WeatherApp/assets/android.png')}
            >
                <Text style={styles.textStyle}>
                    {text}
                </Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    textStyle: {
        fontSize: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white'
    }
});

export default Header;