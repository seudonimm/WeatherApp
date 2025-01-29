import React, { useState } from "react";
import { 
    StyleSheet,
    View,
    Button,
    Platform,
    TouchableOpacity,
    Text
 } from "react-native";
import CustomInputField from "../components/CustomInputField";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { LoginSchema } from "../schemas/loginSchema";
import Header from "../components/Header";


const Login = props => {
    const navigation = useNavigation();

    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');
    const OnLogin = () => {
        
        navigation.navigate("CurrentWeather")
    };

    return(
        <View style={styles.headerStyle}>
            <Header
                style={styles.headerStyle}
                text={"Login"}
            />
        <Formik
            initialValues={{username: '', password: ''}}
            validationSchema={LoginSchema}
            onSubmit={OnLogin}
        >
            {({handleChange, handleSubmit, values, errors}) =>(
                <View style={styles.container}>
                    <CustomInputField
                        text={"Username"}
                        onChangeText={handleChange('username')}
                        inputErrorMessage={errors.username}
                    />
                    <CustomInputField
                        text={"Password"}
                        onChangeText={handleChange('password')}
                        inputErrorMessage={errors.password}
                    />
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.textStyle}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 8,
        ...Platform.select({
            ios:{
                backgroundColor: 'grey'
            },
            android: {
                backgroundColor: 'green'
            }
        })
    },
    headerStyle:{
        flex: 2
    },
    buttonStyle: {
        height: '10%',
        width: '30%',
        backgroundColor: 'black',
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});
export default Login;