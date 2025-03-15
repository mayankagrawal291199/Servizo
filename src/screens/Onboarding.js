import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {COLORS, SIZES} from '../theme/theme';
import {IMAGES} from '../assets';

const {width} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Select\nLocation',
    subtitle:
      "A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: IMAGES.onboarding1,
    step: 'Step 1/3',
    backgroundColor: COLORS.primary,
  },
  {
    id: '2',
    title: 'Select\nCuisine',
    subtitle:
      "A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: IMAGES.onboarding2,
    step: 'Step 2/3',
    backgroundColor: COLORS.primary,
  },
  {
    id: '3',
    title: 'Book Your Chef\nFor Your Day',
    subtitle:
      "A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: IMAGES.onboarding3,
    step: 'Step 3/3',
    backgroundColor: COLORS.primary,
  },
];

const Onboarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <View style={styles.header}>
        <Text style={styles.logoText}>Servizo.</Text>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.stepText}>{item.step}</Text>
          <View style={styles.titleContainer}>
            <Text style={styles.selectText}>Select</Text>
            <Text style={styles.locationText}>
              {item.title.split('\n')[1]}
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
        </View>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
      <View style={styles.footer}>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === currentIndex && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  slide: {
    width,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '600',
  },
  skipButton: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  skipText: {
    color: COLORS.white,
    fontSize: 14,
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  stepText: {
    color: COLORS.white,
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  titleContainer: {
    marginBottom: 40,
  },
  selectText: {
    color: COLORS.white,
    fontSize: 24,
    marginBottom: 4,
  },
  locationText: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  subtitle: {
    color: '#CCCCCC',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  pagination: {
    flexDirection: 'row',
    gap: 6,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  paginationDotActive: {
    backgroundColor: COLORS.primary,
    width: 20,
  },
  nextButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: 24,
  },
});

export default Onboarding;
