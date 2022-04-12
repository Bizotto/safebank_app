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
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../colors/Colors';
import {Input} from '../components/Input';
import logo from '../images/saBanklogo.png';

export const Login = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(user);
  const [password, setPassword] = useState(password);
  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={['#25001C', '#62315E', '#510151']}
        style={styles.backgroundImage}
      /> */}

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
          value={password}
          setValue={setPassword}
          placeholder="Digite sua senha"
          isSecure
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
      
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text style={{color: colors.registrationColor}}>
            Doesn't have an account? Register now.
          </Text>
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
    marginBottom: 10,
  },
  backgroundImage: {
    width: 100,
    height: 100,
  },
});
