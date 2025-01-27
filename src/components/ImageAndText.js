import React from "react";
import {
    Image,
    Text,
    View,
    StyleSheet
}from 'react-native';

const ImageAndText = props => {
    const {text1, text2} = props;

    return(
        <View>
            <Image style={styles.imageStyle} source={props.source}/>
            <Text style={styles.textStyle}>
                {text1}
            </Text>
            <Text style={styles.textStyle}>
                {text2}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    imageStyle: {
        width: 30,
        height: 30,
        alignSelf: 'center'
    },
    textStyle: {
        textAlign: 'center',
        color: 'white'
    }
});

export default ImageAndText;