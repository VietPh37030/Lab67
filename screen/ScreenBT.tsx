import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function ScreenBT() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ScreenOne}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./image/Vector.png')} // thay đường dẫn bằng đường dẫn thực tế của hình ảnh
              style={{ width: 20, height: 20 }} // thay đổi kích thước theo nhu cầu của bạn
            />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={ScreenTwo}  options={{
          tabBarIcon: () => (
            <Image
              source={require('./image/ring.png')} // thay đường dẫn bằng đường dẫn thực tế của hình ảnh
              style={{ width: 20, height: 20 }} // thay đổi kích thước theo nhu cầu của bạn
            />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default ScreenBT;
