import React from "react";
import { StyleSheet, Text, View }from 'react-native';
import HorizontalImageAndText from "./HorizontalImageAndText";


const ForecastListItemBox = props => {
    const {day, weatherText, temp} = props;
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                {day}
            </Text>
            <HorizontalImageAndText style={styles.textStyle} 
                text={weatherText}
                source={props.source}    
            />
            <Text style={styles.textStyle}>
                {temp}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 25
    },
    textStyle: {
        color: 'white',
        fontSize: 25
    }
});

export default ForecastListItemBox;