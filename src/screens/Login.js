import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../colors/Colors';
import {Input} from '../components/Input';
import logo from '../images/saBanklogo.png';

export const Login = () => {
  const [user, setUser] = useState(user);
  const [pass, setPass] = useState(pass);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4c666f', '#3b5998', '#192f6a']}
        style={styles.backgroundImage}
      />

      <View>
        <Image style={styles.logoStyle} source={logo}></Image>
      </View>
      <Text style={styles.titleGG}>Seja Bem-vindo!!</Text>

      <View style={{width: '100%'}}>
        <Input
          text="E-mail"
          value={user}
          setValue={setUser}
          placeholder="Digite seu e-mail"
        />
        <Input
          text="Senha"
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
    justifyContent: 'space-around',
    fontFamily: 'scada',
  },
  titleGG: {
    textAlign: 'center',
    color: colors.textColor,
    fontSize: 25,
    fontFamily: 'Scada',
    marginTop: 5,
  },
  logoStyle: {
    marginTop: 5,
    width: 100,
    height: 100,
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

  backgroundImage: {
    width: 100,
    height: 100,
  },
});
