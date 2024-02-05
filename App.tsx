import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
const Drawer = createDrawerNavigator();
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import DeiltaScreen from './screen/DeiltaScreen';
import ScreenBT from './screen/ScreenBT';

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Top Taps" component={DeiltaScreen} />
        <Drawer.Screen name="Bottom Taps" component={ScreenBT} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
