import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {colors} from '../colors/Colors';

export const Input = ({
  value,
  setValue,
  isSecure = false,
  placeholder,
  text,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>

      <View style={styles.loginStyle}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={isSecure}
        placeholderTextColor='gray'
        textAlign='center'
        />
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loginStyle: {
    color: colors.textColor,
    fontSize: 16,
  
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5
  },
  text:{
    color: colors.textColor,
    marginBottom: 10
  },
  container:{
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10
  },
  input:{
    color: colors.textColor,
    fontSize: 16,
   
  }
});
