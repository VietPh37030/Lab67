// DeiltaScreen.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

const Tab = createMaterialTopTabNavigator();

function DeiltaScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ScreenOne}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Settings"
        component={ScreenTwo}
        options={{ tabBarLabel: 'Settings' }}
      />
    </Tab.Navigator>
  );
}

export default DeiltaScreen;
