import { createStaticNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CurrentWeather from "../screens/CurrentWeather";
import DailyForecast from "../screens/DailyForecast";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

function RootStack(){
    return (
        
        <Stack.Navigator initialRouteName="CurrentWeather">
            <Stack.Screen name="CurrentWeather" component={CurrentWeather}
                options={{
                    //headerShown:false
                }}
            />
            <Stack.Screen name="DailyForecast" component={DailyForecast}/>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    );
}

//const Navigation = createStaticNavigation(RootStack);

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <RootStack/>  
        </NavigationContainer>
    );
};

export default AppNavigation;