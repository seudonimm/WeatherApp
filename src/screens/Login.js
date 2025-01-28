import React, { useState } from "react";
import { 
    StyleSheet,
    View
 } from "react-native";
import CustomInputField from "../components/CustomInputField";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
            <CustomInputField
                text={"Username"}
                OnChangeText={text => setUsername(text)}
            />
            <CustomInputField
                text={"Password"}
                OnChangeText={text => setPassword(text)}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default Login;