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
import {Input} from '../components/Input';
import logo from '../images/saBanklogo.png';

export const Registration = ({name}) => {
  const navigation = useNavigation();
  const [makeUser, setMakeUser] = useState(makeUser);
  const [makePassword, setMakePassword] = useState(makePassword);
  const [confirmPassword, setConfirmPassword] = useState(confirmPassword);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.registrationLogo} source={logo}></Image>
      </View>

      <Text style={styles.textTitle}>Cadastre-se</Text>

      <View style={{width: '100%'}}>
        <Input
          value={makeUser}
          setValue={setMakeUser}
          placeholder={'Digite seu email ou celular'}
        />
        <Input
          value={makePassword}
          setValue={setMakePassword}
          placeholder={'Digite sua senha'}
          isSecure
        />
        <Input
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder={'Confirme sua senha'}
          isSecure
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.buttonText}>CONTINUAR!!</Text>
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
  },
  buttonText: {
    color: colors.buttonTextColor,
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
  registrationLogo: {
    marginTop: 5,
    width: 100,
    height: 100,
  },
  textTitle: {
    fontSize: 23,
    color: colors.textColor,
  },
});
