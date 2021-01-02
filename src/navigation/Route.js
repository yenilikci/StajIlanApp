import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from './DrawerNavigator';

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