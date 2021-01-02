import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Privacy from "../screens/Privacy";
import User from "../screens/User";
import Blog from "../screens/Blog";
import About from "../screens/About";
import Home from "../screens/Home";
const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#3a86e9"
    },
    headerTintColor: "white",
    headerBackTitle: "geri",
};

const homeScreenOptionStyle = {
    headerStyle: {
        backgroundColor: "#3a86e9"
    },
    headerTintColor: "white",
    headerShown: false
}

const PrivacyStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Gizlilik" component={Privacy}/>
        </Stack.Navigator>
    );
}

const AboutStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Hakkında" component={About}/>
        </Stack.Navigator>
    );
}

const BlogStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Blog" component={Blog}/>
        </Stack.Navigator>
    );
}

const UserStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={homeScreenOptionStyle}>
            <Stack.Screen name="Anasayfa"  component={Home}/>
            <Stack.Screen name="Kullanici" component={User}/>
        </Stack.Navigator>
    );
}


export {PrivacyStackNavigator,BlogStackNavigator,AboutStackNavigator,UserStackNavigator};