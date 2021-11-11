import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StaterPage from '../pages/starterPage';

const {Navigator, Screen} = createStackNavigator();

const UnsignedStack = () => (
  <Navigator screenOptions={{headerShown: false}} initialRouteName="StaterPage">
    <Screen name="StaterPage" component={StaterPage} />
  </Navigator>
);

export default UnsignedStack;
