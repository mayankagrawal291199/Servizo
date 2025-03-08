import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS} from '../common';
import {moderateScale} from '../common/Scale';
import {IMAGES} from '../assets';

const chefsData = [
  {
    id: '1',
    name: 'Harleigh Pineda',
    experience: '6+ years of experience',
    rating: '4.8',
    bookings: 452,
    phone: '(620) 756-4811',
    image: IMAGES.defaultMan, // Placeholder image URL
  },
  // Repeat the same object for more chefs
  {
    id: '2',
    name: 'Harleigh Pineda',
    experience: '6+ years of experience',
    rating: '4.8',
    bookings: 452,
    phone: '(620) 756-4811',
    image: IMAGES.defaultMan,
  },
  {
    id: '3',
    name: 'Harleigh Pineda',
    experience: '6+ years of experience',
    rating: '4.8',
    bookings: 452,
    phone: '(620) 756-4811',
    image: IMAGES.defaultMan,
  },
  // Add more chefs as needed
];

const ChefAvailability = ({route, navigation}) => {
  const renderChefItem = ({item}) => (
    <View style={styles.chefCard}>
      <Image source={item.image} style={styles.chefImage} />
      <View style={styles.chefDetails}>
        <Text style={styles.chefName}>{item.name}</Text>
        <Text style={styles.chefNameExperienct}>{item.experience}</Text>
        <View style={styles.rateView}>
          <Text style={styles.rating}>⭐ {item.rating} Ratings</Text>
          <Text style={styles.booking}>({item.bookings} Bookings)</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
            navigation.navigate('DietaryPlanScreen');
        }}
        style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.header}>56 Chefs Are Available</Text>
        <Text style={styles.subHeader}>
          According to your event date, location, budget, and preferred cuisine.
        </Text>
        <Text style={styles.selectChefTitle}>Select Chef</Text>
      </View>
      <FlatList
        data={chefsData}
        renderItem={renderChefItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purpleApp,
  },
  headerView: {
    margin: moderateScale(20),
  },
  header: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: moderateScale(14),
    color: '#666',
    marginBottom: 20,
  },
  selectChefTitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chefCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(15),
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: moderateScale(10),
  },
  chefImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: 25,
    marginRight: moderateScale(10),
  },
  chefDetails: {
    flex: 1,
  },
  chefName: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  chefNameExperienct: {
    fontSize: moderateScale(12),
    fontWeight: '300',
    paddingVertical: moderateScale(8),
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
  },
  bookButton: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    backgroundColor: COLORS.btnColor,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ChefAvailability;
