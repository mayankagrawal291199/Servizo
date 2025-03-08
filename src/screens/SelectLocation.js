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

export default function SelectLocation({route, navigation}) {
  const [isLoading, setisLoading] = useState(false);
  const [searchAddress, setsearchAddress] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image source={IMAGES.backIconImage} />
        <Image source={IMAGES.drawerBar} />
      </View>
      <View style={styles.bodyView}>
        <Text style={styles.SelectLocationView}>{'Select your Location'}</Text>

        <View style={styles.mainBodyView}>
          <CustomTextInput
            imageSource={IMAGES.searchIcon}
            placeholder={'Search for your address'}
            value={searchAddress}
            onChangeText={text => {
              setsearchAddress(text);
            }}
          />
        </View>
      </View>
      <CustomButton
        flag={0}
        style={{alignSelf: 'center'}}
        title={'Confirm Location'}
        onPress={()=>{
          navigation.navigate('SelectCuisine')
        }}
      />
      <ActivityLoader loading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purpleApp,
  },
  mainBodyView: {
    marginVertical: moderateScale(10),
  },
  headerView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: moderateScale(20),
  },
  bodyView: {
    marginHorizontal: moderateScale(20),
    flex: 1,
  },
  SelectLocationView: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
