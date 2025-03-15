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

const PersonalDetailsScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Main')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Image source={IMAGES.appLogo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Personal Details</Text>
      <Text style={styles.subtitle}>
        Few more details to get you know better
      </Text>

      <TextInput
        style={styles.input}
        placeholder="First Name *"
        placeholderTextColor={COLORS.gray}
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor={COLORS.gray}
        value={lastName}
        onChangeText={setLastName}
      />

      <View style={styles.phoneContainer}>
        <TextInput
          style={[styles.input, {flex: 1}]}
          placeholder="Phone Number *"
          placeholderTextColor={COLORS.gray}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => setIsPhoneVerified(true)}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={[styles.input, styles.addressInput]}
        placeholder="Address"
        placeholderTextColor={COLORS.gray}
        value={address}
        onChangeText={setAddress}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.saveButtonText}>Save Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.base * 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.base * 2,
  },
  backButton: {
    padding: SIZES.base,
  },
  skipButton: {
    padding: SIZES.base,
  },
  skipText: {
    color: COLORS.white,
    fontSize: 16,
  },
  logo: {
    width: 120,
    height: 30,
    alignSelf: 'center',
    marginVertical: SIZES.base * 3,
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.gray,
    fontSize: 14,
    textAlign: 'center',
    marginTop: SIZES.base,
    marginBottom: SIZES.base * 3,
  },
  input: {
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    color: COLORS.white,
    marginBottom: SIZES.base * 2,
    height: 45,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.base,
  },
  verifyButton: {
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: SIZES.base * 2,
  },
  verifyText: {
    color: COLORS.white,
    fontSize: 14,
  },
  addressInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    alignItems: 'center',
    marginTop: SIZES.base * 2,
  },
  saveButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default PersonalDetailsScreen;