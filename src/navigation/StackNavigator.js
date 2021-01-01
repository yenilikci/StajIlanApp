import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../screens/Home";
import About from '../screens/About';
import Privacy from "../screens/Privacy";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#3a86e9"
    },
    headerTintColor: "white",
    headerBackTitle: "geri",
};

const MainStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Anasayfa" component={Home}/>
            <Stack.Screen name="Hakkında" component={About}/>
        </Stack.Navigator>

    );
}

const PrivacyStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Gizlilik" component={Privacy}/>
        </Stack.Navigator>
    );
}

export {MainStackNavigator,PrivacyStackNavigator};