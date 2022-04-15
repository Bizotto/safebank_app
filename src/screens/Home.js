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

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container} >
      <Text style={styles.textColor} >Here We show Passwords</Text>
    </View>
  );
};
const styles = StyleSheet.create({
container:{
backgroundColor: colors.backPurple,
flex:1,
alignItems:'center',
justifyContent:'space-around'


},
textColor:{
  color: colors.textColor,
}

})