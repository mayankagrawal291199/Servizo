import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {IMAGES} from '../assets';
import { COLORS, SIZES } from '../theme/theme';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={IMAGES.loginLogo} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={COLORS.gray}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={COLORS.gray}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signupLink}>Create now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.base * 2,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: SIZES.base * 3,
    height: 40,
    resizeMode: 'contain',
  },
  welcomeText: {
    color: COLORS.white,
    fontSize: SIZES.extraLarge,
    marginBottom: SIZES.base * 3,
    textAlign: 'center',
  },
  input: {
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 2,
    marginBottom: SIZES.base * 2,
    color: COLORS.white,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base,
    padding: SIZES.base * 2,
    marginTop: SIZES.base,
  },
  loginButtonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: SIZES.medium,
  },
  forgotPassword: {
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: SIZES.base * 2,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.base * 3,
  },
  signupText: {
    color: COLORS.gray,
  },
  signupLink: {
    color: COLORS.primary,
  },
});

export default LoginScreen;
