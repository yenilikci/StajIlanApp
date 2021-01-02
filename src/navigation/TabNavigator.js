import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BlogStackNavigator,UserStackNavigator} from "./StackNavigator";
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
                  iconName = focused ? 'ios-copy' : 'ios-copy';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
          }
      })}

      tabBarOptions={{
          activeTintColor: '#3a86e9',
          inactiveTintColor: '#010101',
          tabStyle: {
              paddingBottom: 5,
              paddingTop: 5,
          }
      }}
      >
          <Tab.Screen options={{tabBarBadge:10}} name="Anasayfa" component={UserStackNavigator}>
          </Tab.Screen>
          <Tab.Screen name="Blog" component={BlogStackNavigator}></Tab.Screen>
      </Tab.Navigator>
  );
};

export default BottomTabNavigator;
