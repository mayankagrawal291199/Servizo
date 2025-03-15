import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS } from '../../common';
import { moderateScale } from '../../common/Scale';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGES } from '../../assets';

const ChefDetailScreen = ({ route, navigation }) => {
  const { chef } = route.params;

  const popularDishes = [
    { id: 1, image: IMAGES.dummyImage, name: 'Dish 1' },
    { id: 2, image: IMAGES.dummyImage, name: 'Dish 2' },
    { id: 3, image: IMAGES.dummyImage, name: 'Dish 3' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={IMAGES.backIconImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <Image source={chef.image} style={styles.chefImage} />
          <Text style={styles.chefName}>{chef.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{chef.rating}</Text>
            <Icon name="star" size={16} color="#FFD700" />
          </View>
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Professional Chef</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{chef.experience}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          I started my journey as a home cook in 2017 and now I am a professional chef. I love to experiment with new recipes and create unique dishes. My specialty lies in creating fusion dishes that combine different cuisines.
        </Text>

        <Text style={styles.sectionTitle}>Popular Dishes by {chef.name}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dishesContainer}>
          {popularDishes.map(dish => (
            <View key={dish.id} style={styles.dishCard}>
              <Image source={dish.image} style={styles.dishImage} />
              <Text style={styles.dishName}>{dish.name}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      <TouchableOpacity 
        style={styles.bookButton}
        onPress={() => navigation.navigate('ChefChat')}>
        <Text style={styles.bookButtonText}>Book Chef Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: moderateScale(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(20),
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: moderateScale(30),
  },
  chefImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    marginBottom: moderateScale(15),
  },
  chefName: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: moderateScale(10),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(15),
  },
  rating: {
    marginRight: moderateScale(5),
    fontSize: moderateScale(16),
  },
  badgeContainer: {
    flexDirection: 'row',
  },
  badge: {
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(5),
  },
  badgeText: {
    color: COLORS.gray,
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    marginBottom: moderateScale(10),
  },
  aboutText: {
    color: COLORS.gray,
    lineHeight: moderateScale(22),
    marginBottom: moderateScale(30),
  },
  dishesContainer: {
    marginBottom: moderateScale(20),
  },
  dishCard: {
    marginRight: moderateScale(15),
    alignItems: 'center',
  },
  dishImage: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(8),
  },
  dishName: {
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
  bookButton: {
    backgroundColor: COLORS.btnColor,
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  bookButtonText: {
    color: COLORS.white,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});

export default ChefDetailScreen;