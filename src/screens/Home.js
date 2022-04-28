import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../colors/Colors';


export const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.buttonPass}>
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonPass}>
          <Text style={styles.buttonText}>instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonPass}>
          <Text style={styles.buttonText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backPurple,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },

  buttonText: {
    color: colors.buttonTextColor,
  },
  buttonPass: {
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    marginBottom: 10,
  },
  textColor: {
    color: colors.textColor,
  },
});
