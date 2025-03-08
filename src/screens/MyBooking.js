import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import {moderateScale, scale} from '../common/Scale';
import {COLORS} from '../common';

const MyBookingsScreen = ({route, navigation}) => {
  const [selectedTab, setselectedTab] = useState('Upcoming');
  return (
    <View style={styles.container}>
      {/* Location and Login Button */}
      <View style={{margin: moderateScale(20), flex: 1}}>
        <View style={styles.header}>
          <CustomTextInput
            placeholder={'123 Main St, New York, NY'}
            mainStyle={{width: moderateScale(250)}}
          />
          {/* <Text style={styles.locationText}>123 Main St, New York, NY</Text> */}
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Help')
          }} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>My Bookings</Text>

        {/* Tabs for Booking Status */}
        <View style={styles.tabs}>
          <TouchableOpacity
            onPress={() => {
              setselectedTab('Upcoming');
            }}
            style={[
              styles.inactiveTab,
              selectedTab == 'Upcoming' && styles.activeTab,
            ]}>
            <Text style={styles.inactiveTabText}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setselectedTab('Finished');
            }}
            style={[
              styles.inactiveTab,
              selectedTab == 'Finished' && styles.activeTab,
            ]}>
            <Text style={styles.inactiveTabText}>Finished</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setselectedTab('Cancelled');
            }}
            style={[
              styles.inactiveTab,
              selectedTab == 'Cancelled' && styles.activeTab,
            ]}>
            <Text style={styles.inactiveTabText}>Cancelled</Text>
          </TouchableOpacity>
        </View>

        {/* Bookings List */}
        <ScrollView style={styles.bookingsList}></ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(20),
  },
  locationText: {
    fontSize: moderateScale(14),
    color: '#000',
  },
  loginButton: {
    backgroundColor: COLORS.btnColor,
    padding: moderateScale(10),
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#FFF',
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: moderateScale(10),
  },
  tabs: {
    flexDirection: 'row',
    borderRadius: moderateScale(10),
    borderWidth: 0.1,
    // marginBottom: moderateScale(20),
  },
  activeTab: {
    padding: moderateScale(10),
    backgroundColor: '#F7C74C',
    borderTopStartRadius: moderateScale(10),
    borderTopEndRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: moderateScale(10),
  },
  activeTabText: {
    color: '#FFF',
  },
  inactiveTab: {
    padding: moderateScale(10),
    // backgroundColor: '#E0E0E0',
    marginRight: 10,
    width: moderateScale(100),
  },
  inactiveTabText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: scale(12),
  },
  bookingsList: {
    flex: 1,
    backgroundColor: COLORS.whiteShade1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.grayShade1,
    padding: moderateScale(10),
  },
  bookingItem: {
    fontSize: moderateScale(18),
    padding: moderateScale(5),
    color: '#000',
  },
});

export default MyBookingsScreen;
