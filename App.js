// In App.js in a new project
import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Route from './src/navigators/Route';
import SplashScreen from './src/screens/SplashScreen';
import {COLORS} from './src/common';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Route />
      {/* <SplashScreen/> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purpleApp,
  },
});
export default App;
