import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS, SIZES} from '../../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {IMAGES} from '../../assets';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [promotionalOffers, setPromotionalOffers] = useState(false);

  const handleVerifyEmail = () => {
    setIsCodeSent(true);
  };

  const handleVerifyCode = () => {
    setIsVerified(true);
  };

  const renderEmailVerification = () => (
    <>
      <Text style={styles.headerText}>
        Verify your email ID to create an account
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email ID"
          placeholderTextColor={COLORS.gray}
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={styles.codeButton}
          onPress={handleVerifyEmail}>
          <Text style={styles.buttonText}>Send Code</Text>
        </TouchableOpacity>
      </View>

      {isCodeSent && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="D X K H T L"
            placeholderTextColor={COLORS.gray}
            value={code}
            onChangeText={setCode}
          />
          <TouchableOpacity
            style={[styles.codeButton, {backgroundColor: '#4CAF50'}]}
            onPress={handleVerifyCode}>
            <Text style={styles.buttonText}>Verified</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );

  const renderPasswordSection = () => (
    <>
      <Text style={styles.sectionTitle}>Create Password</Text>
      <Text style={styles.requirement}>
        Must contain 12 characters, uppercase, lowercase & number
      </Text>
      <TextInput
        style={styles.fullInput}
        placeholder="Enter password"
        placeholderTextColor={COLORS.gray}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.fullInput}
        placeholder="Confirm password"
        placeholderTextColor={COLORS.gray}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setTermsAccepted(!termsAccepted)}>
          {termsAccepted && <Icon name="checkmark" size={16} color={COLORS.white} />}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Terms & Conditions</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setPromotionalOffers(!promotionalOffers)}>
          {promotionalOffers && <Icon name="checkmark" size={16} color={COLORS.white} />}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Promotional Offers</Text>
      </View>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('PersonalDetails')}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={COLORS.white} />
      </TouchableOpacity>

      <Image source={IMAGES.appLogo} style={styles.logo} resizeMode="contain" />

      {!isVerified ? renderEmailVerification() : renderPasswordSection()}

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.createNowText}>Create now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  headerText: {
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: SIZES.base * 3,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: SIZES.base * 2,
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    color: COLORS.white,
    marginRight: SIZES.base,
    height: 45,
  },
  codeButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    justifyContent: 'center',
    paddingHorizontal: SIZES.base * 2,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '500',
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: SIZES.base,
  },
  requirement: {
    color: COLORS.gray,
    fontSize: 12,
    marginBottom: SIZES.base * 2,
  },
  fullInput: {
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    color: COLORS.white,
    marginBottom: SIZES.base * 2,
    height: 45,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.base,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginRight: SIZES.base,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    color: COLORS.gray,
    fontSize: 14,
  },
  createButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    alignItems: 'center',
    marginTop: SIZES.base * 2,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.base * 4,
    marginBottom: SIZES.base * 2,
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

export default SignUpScreen;