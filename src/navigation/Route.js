import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from './DrawerNavigator';
import {SafeAreaView, StyleSheet,StatusBar} from "react-native";

const Route = () => {
    return(
        <>
      <NavigationContainer>
          <DrawerNavigator/>
      </NavigationContainer>
        </>
    );
}


export default Route;