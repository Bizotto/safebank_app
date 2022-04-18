import React from 'react';
import {Text, View} from 'react-native';
import {BlurView} from 'expo-blur';

export const Blur = () => {
  return (
    <BlurView intensity={100}>
      <View style={{backgroundColor: 'red'}}>
        <Text>Olá</Text>
      </View>
    </BlurView>
  );
};
