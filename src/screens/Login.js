import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../colors/Colors';
import {Input} from '../components/Input';

export const Login = () => {
  const [user, setUser] = useState(user);
  const [pass, setPass] = useState(pass);
  return (
    <View style={styles.container}>
      <Text style={styles.titleGG}>Seja Bem-vindo!!</Text>

      <View style={{width: '100%'}}>
        <Input
          text="E-mail"
          value={user}
          setValue={setUser}
          placeholder="Digite seu e-mail"
        />
        <Input text="Senha"
          value={pass}
          setValue={setPass}
          placeholder="Digite sua senha"
          isSecure
          />
        
      </View>

      <TouchableOpacity
        style={styles.button}
        title="Registrar"
        onPress={() => console.warn(user)}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backPurple,
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'scada'
  },
  titleGG: {
    textAlign: 'center',
    color: colors.textColor,
    fontSize: 25,
    fontFamily: 'Scada',
    marginTop: 20,
  },

  buttonStyle: {
    padding: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  button: {
    width: '80%',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',

    marginBottom: 20,
  },
});
