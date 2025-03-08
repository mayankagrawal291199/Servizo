import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {IMAGES} from '../assets';
import {COLORS} from '../common';
import {moderateScale} from '../common/Scale';
import CustomButton from '../components/CustomButton';

const foods = [
  {id: '1', name: 'Chick Biriyani'},
  {id: '2', name: 'Chick Biriyani'},
  {id: '3', name: 'Chick Biriyani'},
  {id: '4', name: 'Chick Biriyani'},
  {id: '5', name: 'Chick Biriyani'},
];

const FoodType = ({route,navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{margin: moderateScale(20), flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={IMAGES.backIconImage} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IMAGES.drawerBar} />
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <View style={styles.userInfo}>
          <Image
            source={IMAGES.defaultMan} // Replace with actual image URL
            style={styles.profileImage}
          />
          <View style={styles.userDetails}>
            <Text style={styles.rate}>Ramesh</Text>

            <Text style={styles.experience}>8+ years of experience</Text>
            <Text style={styles.rate}>120€ per hour</Text>
            <View style={styles.rateView}>
              <Text style={styles.rating}>⭐ {'4'} Ratings</Text>
              <Text style={styles.booking}>({'500'} Bookings)</Text>
            </View>
          </View>
        </View>

        {/* Food List */}
        <Text style={styles.foodType}>Type of food</Text>
        <FlatList
          data={foods}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.foodItem}>
              <Image
                source={IMAGES.defaultMan} // Replace with actual food image URL
                style={styles.foodImage}
              />
              <Text style={styles.foodName}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <CustomButton onPress={()=>{
        navigation.navigate('MyBookingsScreen')
      }} style={{alignSelf: 'center'}} flag={0} title={'Next'} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    fontSize: moderateScale(24),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(20),
  },
  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: 50,
    marginRight: moderateScale(16),
  },
  rating: {
    color: COLORS.black, // Gold color for rating
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  booking: {
    color: COLORS.black, // Gold color for rating
    fontSize: moderateScale(10),
    fontWeight: '500',
    alignSelf: 'center',
    paddingHorizontal: moderateScale(3),
  },
  rateView: {
    flexDirection: 'row',
    paddingVertical: moderateScale(4),
  },
  userDetails: {
    justifyContent: 'center',
  },
  experience: {
    fontSize: moderateScale(12),
    paddingVertical: moderateScale(4),
  },
  rate: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },

  foodType: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginVertical: moderateScale(10),
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(10),
  },
  foodImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: 25,
    marginRight: moderateScale(15),
  },
  foodName: {
    fontSize: moderateScale(16),
  },
});

export default FoodType;
