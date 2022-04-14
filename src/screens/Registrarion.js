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
import logo from '../images/saBanklogo.png';

export const Registration = ({name}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.registrationLogo} source={logo}></Image>
      </View>
      <Text style={styles.textTitle} >Sign Up</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backPurple,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: '80%',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    marginBottom: 10,
  },
  registrationLogo: {
    marginTop: 5,
    width: 100,
    height: 100,
  },
  textTitle:{
    fontSize: 23,
    color: colors.textColor,
  }
});