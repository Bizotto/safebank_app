import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {colors} from '../colors/Colors';
import {Input} from '../components/Input';
import {Routes} from '../routes';
import {Login} from './Login';

export const Registration = ({name,}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Sign Up</Text>
    </View>
  );
};
