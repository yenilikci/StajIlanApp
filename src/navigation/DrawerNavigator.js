import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {PrivacyStackNavigator,AboutStackNavigator} from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Anasayfa" component={TabNavigator}/>
            <Drawer.Screen name="Hakkında" component={AboutStackNavigator}/>
            <Drawer.Screen name="Gizlilik" component={PrivacyStackNavigator}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;