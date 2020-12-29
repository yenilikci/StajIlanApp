import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../screens/Home";
import About from '../screens/About';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: '#9AC4F8',
            },
            headerTintColor: "white",
            headerBackTitle: "Geri",
        }}>
            <Stack.Screen name="Anasayfa" component={Home}/>
            <Stack.Screen name="Hakkında" component={About}/>
        </Stack.Navigator>

    );
}

export {MainStackNavigator};