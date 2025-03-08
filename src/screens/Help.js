import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {Image} from 'react-native-animatable';
import {IMAGES} from '../assets';
import {moderateScale} from '../common/Scale';
import CustomTextInput from '../components/CustomTextInput';


const helpTopics = [
  {id: '1', title: 'Getting Started'},
  {id: '2', title: 'Using the App'},
  {id: '3', title: 'Payment and Billing'},
  {id: '4', title: 'Booking and Scheduling'},
  {id: '5', title: 'Account Management'},
  {id: '6', title: 'Customer Support'},
  {id: '7', title: 'Privacy and Security'},
];

const Help = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomTextInput
          placeholder={'123 Main St, New York, NY'}
          mainStyle={{width: moderateScale(250)}}
        />
        {/* <Text style={styles.locationText}>123 Main St, New York, NY</Text> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BookingDate');
          }}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Help</Text>
      {/* Help Topics List */}
      <FlatList
        data={helpTopics}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.helpItem}>
            <Text>{item.title}</Text>
            <Image source={IMAGES.backImage} style={styles.backView} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(20),
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bookingItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  helpItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backView: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
  arrow: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Help;
