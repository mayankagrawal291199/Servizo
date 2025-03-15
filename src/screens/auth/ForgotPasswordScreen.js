import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {COLORS, SIZES} from '../../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {IMAGES} from '../../assets';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleVerify = () => {
    setIsVerified(true);
    navigation.navigate('ResetPassword');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={COLORS.white} />
      </TouchableOpacity>

      <Image source={IMAGES.appLogo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>
        Verify your email ID to change the password
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.emailInput}
          placeholder="Email ID"
          placeholderTextColor={COLORS.gray}
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={[styles.button, styles.sendCodeButton]}
          onPress={() => setIsCodeSent(true)}>
          <Text style={styles.buttonText}>Send Code</Text>
        </TouchableOpacity>
      </View>

      {isCodeSent && !isVerified && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.codeInput}
            placeholder="Enter CODE"
            placeholderTextColor={COLORS.gray}
            value={code}
            onChangeText={setCode}
          />
          <TouchableOpacity
            style={[styles.button, styles.verifyButton]}
            onPress={handleVerify}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      )}

      {isVerified && (
        <View style={styles.passwordContainer}>
          <Text style={styles.createPasswordTitle}>Create Password</Text>
          <Text style={styles.passwordRequirement}>
            Must contain 12 characters, uppercase, lowercase & number
          </Text>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter password"
            placeholderTextColor={COLORS.gray}
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm password"
            placeholderTextColor={COLORS.gray}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.createNowText}>Create now</Text>
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
  },
  backButton: {
    marginTop: SIZES.base * 2,
    padding: SIZES.base,
  },
  logo: {
    width: 120,
    height: 30,
    alignSelf: 'center',
    marginVertical: SIZES.base * 3,
  },
  title: {
    color: COLORS.white,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: SIZES.base * 3,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: SIZES.base * 2,
    alignItems: 'center',
  },
  emailInput: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    color: COLORS.white,
    marginRight: SIZES.base,
    height: 45,
  },
  codeInput: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    color: COLORS.white,
    marginRight: SIZES.base,
    height: 45,
    textTransform: 'uppercase',
  },
  button: {
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: SIZES.base * 2,
  },
  sendCodeButton: {
    backgroundColor: COLORS.primary,
  },
  verifyButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '500',
  },
  passwordContainer: {
    marginTop: SIZES.base * 2,
  },
  createPasswordTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: SIZES.base,
  },
  passwordRequirement: {
    color: COLORS.gray,
    fontSize: 12,
    marginBottom: SIZES.base * 2,
  },
  passwordInput: {
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    color: COLORS.white,
    marginBottom: SIZES.base * 2,
    height: 45,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    alignItems: 'center',
    marginTop: SIZES.base,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: SIZES.base * 4,
    left: 0,
    right: 0,
  },
  bottomText: {
    color: COLORS.gray,
    fontSize: 14,
  },
  createNowText: {
    color: COLORS.primary,
    fontSize: 14,
  },
});

export default ForgotPasswordScreen;
