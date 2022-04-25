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
          <Text style={styles.buttonText}>senha 1</Text>
        </TouchableOpacity>
      </View>
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
  buttonText: {
    color: '#fff',
  },
  buttonPass: {
    width: '80%',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'purple',
    marginBottom: 10,
  },
  textColor: {
    color: colors.textColor,
  },
});
