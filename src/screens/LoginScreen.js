import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS, IMAGES} from '../assets';
import {moderateScale, scale} from '../common/Scale';
import CustomTextInput from '../components/CustomTextInput';
import {COLORS} from '../common';
import CustomButton from '../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {isValidEmail, showSimpleAlert} from '../utils/CommonUtils';
import Request from '../api/Request';
import StorageService from '../utils/StorageService';
import {ActivityLoader} from '../components/ActivityLoader';

export default function LoginScreen({route, navigation}) {
  const [phoneNo, setphoneNo] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const checkLogin = async () => {
    const ConfirmValid = validationofField();
    if (ConfirmValid) {
      let params = {
        email: email,
        password: password,
      };
      setisLoading(true);
      const response = await Request.post('login', params);
      setisLoading(false);

      if (response.code == 200) {
        await StorageService.saveItem(
          StorageService.STORAGE_KEYS.AUTH_TOKEN,
          response.data.authToken,
        );
        await StorageService.saveItem(
          StorageService.STORAGE_KEYS.USER_DETAILS,
          response.data,
        );
        setemail('');
        setpassword('');
        setTimeout(() => {
          // navigation.navigate('TabScreen');
          // navigation.reset()
          navigation.reset({
            index: 0,
            routes: [{name: 'TabScreen'}],
          });
        }, 1000);
      } else {
        showSimpleAlert(response.message);
      }
    }
  };
  const validationofField = () => {
    if (phoneNo == '') {
      showSimpleAlert('Please enter phone no');
    } else if (password == '') {
      showSimpleAlert('Please enter password');
    } else {
      return true;
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: scale(40), alignItems: 'center'}}>
          <Image source={IMAGES.appLogo} />
        </View>
        <View style={{marginTop: scale(40), alignItems: 'center'}}>
          <Text style={styles.welcomeText}>{'Welcome Back !'}</Text>
          <Text style={styles.loginText}>{'Login Into your Account'}</Text>
        </View>
        <View style={styles.textinputView}>
          <CustomTextInput
            imageSource={IMAGES.phone}
            value={phoneNo}
            onChangeText={text => {
              setphoneNo(text);
            }}
            placeholder={'Phone No'}
          />
          <CustomTextInput
            value={password}
            secureTextEntry={true}
            onChangeText={text => {
              setpassword(text);
            }}
            imageSource={IMAGES.passwordIcon}
            placeholder={'Password'}
          />
        </View>

        <CustomButton
          flag={0}
          title={'Sign In'}
          style={{backgroundColor: COLORS.btnColor, alignSelf: 'center'}}
          onPress={() => {
            navigation.navigate('SelectLocation');
            return;
            checkLogin();
          }}
        />
        <Text style={styles.signUpText}>
          Don’t have an account?
          <TouchableOpacity
            style={styles.signUpView}
            onPress={() => {
              // navigation.navigate('SignUpScreen');
            }}>
            <Text style={styles.signUpText2}> Sign up Here</Text>
          </TouchableOpacity>
        </Text>
      </KeyboardAwareScrollView>
      <ActivityLoader loading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.purpleApp,
  },
  welcomeText: {
    fontSize: scale(28),
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  loginText: {
    fontSize: scale(12),
    fontWeight: '400',
    letterSpacing: 0.5,
    paddingTop: moderateScale(15),
  },
  textinputView: {
    marginTop: scale(30),
  },
  forgotPasswordText: {
    textAlign: 'right',
    paddingVertical: scale(1),
    color: COLORS.yellow,
    fontFamily: FONTS.GothamLight,
    fontWeight: '400',
    fontSize: scale(12),
  },
  signUpText: {
    textAlign: 'center',
    color: COLORS.grey,
    fontWeight: '400',
    fontSize: scale(12),
    letterSpacing: 0.5,
  },
  signUpText2: {
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.GotamBold,
    fontWeight: '700',
    top: scale(4),
    letterSpacing: 0.5,
  },
  signUpView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
