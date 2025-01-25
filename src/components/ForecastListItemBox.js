import React from "react";
import { StyleSheet, Text, View }from 'react-native';


const ForecastListItemBox = props => {
    const {day, weatherText, temp} = props;
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                {day}
            </Text>
            <Text style={styles.textStyle}>
                {weatherText}
            </Text>
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
        marginHorizontal: '5%',
        marginVertical: 10,
    },
    textStyle: {
        color: 'white'
    }
});

export default ForecastListItemBox;