import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MainStackNavigator,PrivacyStackNavigator} from "./StackNavigator";
import Home from "../screens/Home";
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
      <Tab.Navigator
      screenOptions = {({route}) => ({
          tabBarIcon: ({focused,color,size}) => {
              let iconName;
              if (route.name == 'Anasayfa')
              {
                  iconName = focused ? 'ios-home' : 'ios-home';
              }
              else
              {
                  iconName = focused ? 'ios-alert' : 'ios-alert';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
          }
      })}

      tabBarOptions={{
          activeTintColor: '#3a86e9',
          inactiveTintColor: '#000',
          tabStyle: {
              paddingBottom: 5,
              paddingTop: 5,
          }
      }}
      >
          <Tab.Screen options={{tabBarBadge:10}} name="Anasayfa" component={Home}></Tab.Screen>
          <Tab.Screen name="Gizlilik" component={PrivacyStackNavigator}></Tab.Screen>
      </Tab.Navigator>
  );
};

export default BottomTabNavigator;
