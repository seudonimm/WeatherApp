import React, { useState } from "react";
import { StyleSheet, Text } from 'react-native';

const CityText = props => {
    const {text} = props;

    return(
        <Text style={styles.textStyle}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'white'
    }
});

export default CityText;