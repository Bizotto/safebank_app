import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login';
import {Registration} from '../screens/Registrarion';
import {Home} from '../screens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name={'Login'} component={Login} />
        <Screen name={'Registration'} component={Registration} />
        <Screen name={'Home'} component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};
