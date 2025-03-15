import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, SIZES} from '../../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {IMAGES} from '../../assets';

const cuisineData = [
  {
    id: 1,
    name: 'Indian',
    rating: 4.5,
    families: '300+',
    image: IMAGES.defaultHomeImage,
  },
  {
    id: 2,
    name: 'Italian',
    rating: 4.5,
    families: '300+',
    image: IMAGES.defaultHomeImage,
  },
  {
    id: 3,
    name: 'Mexican',
    rating: 4.5,
    families: '300+',
    image: IMAGES.defaultHomeImage,
  },
  {
    id: 4,
    name: 'Chinese',
    rating: 4.5,
    families: '300+',
    image: IMAGES.defaultHomeImage,
  },
];

const SelectCuisineScreen = ({navigation}) => {
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const toggleCuisine = cuisineId => {
    if (selectedCuisines.includes(cuisineId)) {
      setSelectedCuisines(selectedCuisines.filter(id => id !== cuisineId));
    } else {
      setSelectedCuisines([...selectedCuisines, cuisineId]);
    }
  };

  const renderStars = rating => {
    return Array(Math.floor(rating))
      .fill()
      .map((_, index) => (
        <Icon key={index} name="star" size={16} color="#FFD700" />
      ));
  };

  const renderCuisineItem = ({item}) => (
    <TouchableOpacity
      style={styles.cuisineCard}
      onPress={() => toggleCuisine(item.id)}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.cuisineImage} />
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => toggleCuisine(item.id)}>
          <Icon
            name={
              selectedCuisines.includes(item.id)
                ? 'checkmark-circle'
                : 'add-circle-outline'
            }
            size={28}
            color={
              selectedCuisines.includes(item.id) ? COLORS.primary : COLORS.white
            }
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cuisineInfo}>
        <Text style={styles.cuisineName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating}</Text>
          <View style={styles.stars}>{renderStars(item.rating)}</View>
        </View>
        <Text style={styles.families}>
          {item.families} families chooses this cuisine in the past week
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        Select the <Text style={styles.highlight}>Cuisine</Text>
      </Text>

      <FlatList
        data={cuisineData}
        renderItem={renderCuisineItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={[
          styles.nextButton,
          selectedCuisines.length === 0 && styles.disabledButton,
        ]}
        onPress={() =>
          navigation.navigate('SelectLocationScreen', {selectedCuisines})
        }
        disabled={selectedCuisines.length === 0}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
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
    alignItems: 'center',
    marginBottom: SIZES.base * 2,
  },
  title: {
    fontSize: 24,
    color: COLORS.white,
    marginBottom: SIZES.base * 3,
  },
  highlight: {
    color: COLORS.primary,
  },
  row: {
    justifyContent: 'space-between',
  },
  cuisineCard: {
    width: '48%',
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base * 2,
    marginBottom: SIZES.base * 2,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 120,
  },
  cuisineImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 4,
  },
  cuisineInfo: {
    padding: SIZES.base,
  },
  cuisineName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    color: COLORS.white,
    marginRight: 4,
  },
  stars: {
    flexDirection: 'row',
  },
  families: {
    color: COLORS.gray,
    fontSize: 12,
  },
  nextButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.base * 1.5,
    borderRadius: SIZES.base,
    alignItems: 'center',
    marginTop: SIZES.base,
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default SelectCuisineScreen;
