import React, { useState } from "react";
import { StyleSheet, Text } from 'react-native';

const TemperatureText = props => {
    const {text} = props;

    return(
        <Text style={styles.textStyle}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 100,
        color: 'white'
    }
});

export default TemperatureText;