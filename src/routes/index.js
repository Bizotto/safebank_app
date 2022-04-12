import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login';
import { Registration } from '../screens/Registrarion';

const {Navigator, Screen} = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false}}>
        <Screen name={'Login'} component={Login} />
        <Screen name={'Registration'} component={Registration} />
        {/* <Screen name={'Home'} component={Login} /> */}
      </Navigator>
    </NavigationContainer>
  );
};
