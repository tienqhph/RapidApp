import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import {NAME_NAVIGATION} from '../Screen/common/Const';
import Home from '../Screen/Home/Home';
import Detail from '../Screen/Detail/Detail';
import {RootParams} from './type';
import PopularJobComponent from '../Screen/Home/component/PopularJobComponent';

const Stack = createStackNavigator<RootParams>();

export default function mainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={NAME_NAVIGATION.Home} component={Home} />
        <Stack.Screen name={NAME_NAVIGATION.Detail} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
