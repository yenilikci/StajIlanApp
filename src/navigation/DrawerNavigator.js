import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {PrivacyStackNavigator} from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Anasayfa" component={TabNavigator}/>
            <Drawer.Screen name="Gizlilik" component={PrivacyStackNavigator}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;