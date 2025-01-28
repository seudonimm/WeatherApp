import { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
 } from 'react-native';

class ErrorBoundary extends Component{

    constructor(props){
        super(props);

        this.state = {
            error: false
        };
    }
    static getDerivedStateFromError(){
        return {error: true};
    }
    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
    }

    render(){
        if(this.state.error){
            return(
            <View style={styles.errorViewStyle}>
                <Text style={styles.errorTextStyle}>
                    This is an error.
                </Text>
            </View>
            );
        }
        return this.props.children;
    }
}

const styles = StyleSheet.create({
    errorViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    errorTextStyle: {
        fontSize: 25,
        color: 'red'
    }
});
export default ErrorBoundary;