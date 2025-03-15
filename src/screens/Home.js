import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS, SIZES} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {IMAGES} from '../assets';

const Home = ({navigation}) => {
  const renderChefIntro = () => (
    <View style={styles.chefIntroContainer}>
      <Text style={styles.sectionTitle}>Chef Intro</Text>
      <View style={styles.chefCardContainer}>
        <View style={styles.chefProfile}>
          <Image source={IMAGES.dummyImage} style={styles.chefImage} />
          <View style={styles.chefInfo}>
            <Text style={styles.chefName}>Sophia Ray Simpson</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.5</Text>
              <Icon name="star" size={16} color="#FFD700" />
              <Icon name="star" size={16} color="#FFD700" />
              <Icon name="star" size={16} color="#FFD700" />
              <Icon name="star" size={16} color="#FFD700" />
              <Icon name="star-half" size={16} color="#FFD700" />
            </View>
          </View>
        </View>
        <Image source={IMAGES.dummyImage} style={styles.videoThumbnail} />
        <TouchableOpacity style={styles.playButton}>
          <Icon name="play" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={24} color={COLORS.gray} />
          <Text style={styles.locationText}>123 Main St, New York, NY</Text>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Services</Text>
      <View style={styles.servicesContainer}>
        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => navigation.navigate('DietaryPlanScreen')}>
          <Text style={styles.serviceTitle}>Book Your</Text>
          <Text style={styles.serviceHighlight}>Chef</Text>
          <Image source={IMAGES.dummyImage} style={styles.serviceIcon} />
        </TouchableOpacity>

        <View style={styles.serviceCard2}>
          <Text style={styles.serviceTitle2}>Send / Receive</Text>
          <Text style={styles.serviceHighlight2}>Parcel</Text>
          <Text style={styles.comingSoon}>Coming Soon!</Text>
        </View>
      </View>

      {renderChefIntro()}

      <TouchableOpacity style={styles.referButton}>
        <Text style={styles.referButtonText}>Refer A Friend</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.base * 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.base * 3,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    padding: SIZES.base,
    borderRadius: SIZES.base,
    flex: 1,
    marginRight: SIZES.base,
  },
  locationText: {
    color: COLORS.white,
    marginLeft: SIZES.base,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.base * 2,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.base,
  },
  loginText: {
    color: COLORS.white,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 20,
    color: COLORS.white,
    marginBottom: SIZES.base * 2,
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.base * 3,
  },
  serviceCard: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base * 2,
    padding: SIZES.base * 2,
    width: '48%',
    height: 160,
  },
  serviceCard2: {
    backgroundColor: '#8B4513',
    borderRadius: SIZES.base * 2,
    padding: SIZES.base * 2,
    width: '48%',
    height: 160,
  },
  serviceTitle: {
    color: COLORS.white,
    fontSize: 18,
  },
  serviceTitle2: {
    color: '#E5E5E5',
    fontSize: 18,
  },
  serviceHighlight: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  serviceHighlight2: {
    color: '#E5E5E5',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: SIZES.base * 2,
    right: SIZES.base * 2,
  },
  comingSoon: {
    color: COLORS.white,
    position: 'absolute',
    bottom: SIZES.base * 2,
    right: SIZES.base * 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: SIZES.base / 2,
    borderRadius: SIZES.base,
  },
  chefIntroContainer: {
    marginBottom: SIZES.base * 3,
  },
  chefCardContainer: {
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base * 2,
    padding: SIZES.base,
    position: 'relative',
  },
  chefProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.base,
  },
  chefImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chefInfo: {
    marginLeft: SIZES.base,
  },
  chefName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    color: COLORS.white,
    marginRight: 4,
  },
  videoThumbnail: {
    width: '100%',
    height: 180,
    borderRadius: SIZES.base,
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -20}, {translateY: -20}],
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 30,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  referButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.base * 1.5,
    borderRadius: SIZES.base * 2,
    alignItems: 'center',
    marginBottom: SIZES.base * 2,
  },
  referButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Home;
