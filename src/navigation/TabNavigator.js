import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MainStackNavigator,PrivacyStackNavigator} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
      <Tab.Navigator>
          <Tab.Screen name="Anasayfa" component={MainStackNavigator}></Tab.Screen>
          <Tab.Screen name="Gizlilik" component={PrivacyStackNavigator}></Tab.Screen>
      </Tab.Navigator>
  );
};

export default BottomTabNavigator;
