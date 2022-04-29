import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../colors/Colors';

export const NewPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>OIOIOI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backPurple,
  },
  textColor:{
    color: colors.textColor,
  }
});
