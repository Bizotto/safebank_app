import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {colors} from '../colors/Colors';
import {Users} from './Users';

export const Login = () => {

  return (
    <View style={style.container}>
      <Users />
      <Text style={style.titleGG}>Seja Bem-vindo!!</Text>
      <Text style={style.loginStyle}>E-mail</Text>
      <TextInput style={style.emailStyle}
        placeholder="Digite seu E-mail"
        />
      <Text style={style.loginStyle}>Senha</Text>
      <TextInput placeholder="Digite sua Senha" style={style.emailStyle} />
      <Button title="Registrar" onPress={() => console.warn()} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backPurple,
  },
  titleGG: {
    textAlign: 'center',
    color: colors.textColor,
    fontSize: 25,
    fontFamily: 'Scada',
  },
  loginStyle: {
    color: colors.textColor,
    fontSize: 16,
  },
  emailStyle: {
    borderRadius: 5,
    color: colors.textColor,
    borderBottomColor: 'white',
  },
  buttonStyle: {
    padding: 'center',
  },
});
