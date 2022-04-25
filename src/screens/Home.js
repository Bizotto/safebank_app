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
import {Blur} from '../components/Blur';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Here We show Passwords</Text>
      <View>
        <TouchableOpacity style={styles.buttonPass}>
          <Text style={styles.buttonText}>oioi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backPurple,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  backBar: {},
  buttonPass: {
    paddingVertical: 10,
    width: '40%',
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'purple',
  },
  textColor: {
    color: colors.textColor,
  },
});
