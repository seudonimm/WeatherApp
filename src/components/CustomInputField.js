import React from "react";
import {
    Image,
    StyleSheet,
    TextInput,
    View
} from "react-native"

const CustomInputField = (props) => {
    const {text, image, isPasswordField} = props;

    return(
        <View style={styles.container}>
            {/* <Image style={styles.imageStyle} source={props.source}/> */}
            <TextInput 
                style={styles.inputStyle}
                placeholder={text}
                placeholderTextColor={"white"}
                // inlineImageLeft={image}
                onChangeText={props.onChangeText}
                cursorColor={'white'}
                value={props.value}
            />
            {/* <Image 
                style={styles.endImageStyle}
                source={(isPasswordField ? require('/Users/jusman/AwesomeProject/assets/ambiguous_icon.png'): require('/Users/jusman/AwesomeProject/assets/blank.png'))}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: '7%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#1e1d24',
        borderRadius: 30,
        justifyContent: 'left',
        borderWidth: 1,
        borderColor: 'white',
        margin: '2%',
        paddingLeft: '10%',
        color: 'white'
    },
    inputStyle: {
        flex:9,
        /*height: '7%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#1e1d24',
        borderRadius: 30,
        justifyContent: 'left',
        borderWidth: 1,
        borderColor: 'white',
        margin: '2%',
        paddingLeft: '10%',*/
        color: 'white'
    },
    imageStyle: {
        flex: 1,
        height: 25,
        width: 25,
        marginTop: '5%',
        marginRight: '5%'
    },
    endImageStyle: {
        flex: 1,
        height: 25,
        width: 25,
        marginTop: '5%',
        marginRight: '5%',
        justifyContent: 'flex-end',
        
    }
});

export default CustomInputField;