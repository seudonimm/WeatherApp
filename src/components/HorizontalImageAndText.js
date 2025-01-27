import React from "react";
import { 
    Image, 
    StyleSheet, 
    View,
    Text
}from 'react-native';


const HorizontalImageAndText = props => {
    const {text} = props;

    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={props.source}/>
            <Text style={styles.textStyle}>
                {text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imageStyle: {
        height: 30,
        width: 40,
    },
    textStyle: {
        fontSize: 25,
        color: 'white',

    }
});

export default HorizontalImageAndText;