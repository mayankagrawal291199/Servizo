import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {COLORS} from '../common';
import {IMAGES} from '../assets';
import NavigationService from '../utils/NavigationService';
import StorageService from '../utils/StorageService';
import {scale} from '../common/Scale';

export default function SplashScreen({route, navigation}) {
  /**
   * Life cycle method
   */
  useEffect(() => {
    // Define an async function inside useEffect
    async function fetchData() {
      await load();
    }
    // Call the async function
    fetchData();
  }, []);

  const load = async () => {
    const data = await StorageService.getItem(
      StorageService.STORAGE_KEYS.AUTH_TOKEN,
    );
    console.log('data', data);
    if (data) {
      setTimeout(() => {
        navigation.navigate('TabScreen');
      }, 1500);
    } else {
      setTimeout(() => {
        navigation.navigate('Onboarding');
      }, 1500);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo} style={{alignSelf: 'center'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLORS.purpleApp,
  },
});
