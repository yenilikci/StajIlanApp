import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Privacy from "../screens/Privacy";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#3a86e9"
    },
    headerTintColor: "white",
    headerBackTitle: "geri",
};

const PrivacyStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Gizlilik" component={Privacy}/>
        </Stack.Navigator>
    );
}

export {PrivacyStackNavigator};