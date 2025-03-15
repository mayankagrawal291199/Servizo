import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../theme/theme';
import {IMAGES} from '../assets';

const BookingScreen = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const bookings = [
    {
      id: '1',
      chefName: 'Harleigh Pinada',
      address: '123 Main St, New York, NY',
      date: '12 - 15 Nov 2024',
      status: 'Upcoming',
      image: IMAGES.dummyImage,
    },
    // Add more bookings...
  ];

  const renderBookingCard = ({item}) => (
    <View style={styles.bookingCard}>
      <Image source={item.image} style={styles.chefImage} />
      <View style={styles.bookingInfo}>
        <Text style={styles.chefLabel}>Chef</Text>
        <Text style={styles.chefName}>{item.chefName}</Text>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={16} color={COLORS.gray} />
          <Text style={styles.address}>{item.address}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Icon name="calendar-outline" size={16} color={COLORS.gray} />
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      {item.status === 'Finished' && (
        <View style={styles.statusIcon}>
          <Icon name="checkmark-circle" size={24} color="#4CAF50" />
        </View>
      )}
      {item.status === 'Canceled' && (
        <View style={styles.statusIcon}>
          <Icon name="close-circle" size={24} color="#FF5252" />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My <Text style={styles.highlight}>Bookings</Text>
      </Text>

      <View style={styles.tabContainer}>
        {['Upcoming', 'Finished', 'Canceled'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={bookings.filter(booking => booking.status === activeTab)}
        renderItem={renderBookingCard}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.base * 2,
  },
  title: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: SIZES.base * 3,
  },
  highlight: {
    color: COLORS.primary,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: SIZES.base * 2,
  },
  tab: {
    flex: 1,
    paddingVertical: SIZES.base,
    marginHorizontal: 4,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.lightGray,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.gray,
    fontSize: 14,
  },
  activeTabText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  bookingCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base,
    marginBottom: SIZES.base,
    alignItems: 'center',
  },
  chefImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bookingInfo: {
    flex: 1,
    marginLeft: SIZES.base,
  },
  chefLabel: {
    color: COLORS.primary,
    fontSize: 12,
  },
  chefName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  address: {
    color: COLORS.gray,
    fontSize: 12,
    marginLeft: 4,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    color: COLORS.gray,
    fontSize: 12,
    marginLeft: 4,
  },
  statusIcon: {
    marginLeft: SIZES.base,
  },
});

export default BookingScreen;
