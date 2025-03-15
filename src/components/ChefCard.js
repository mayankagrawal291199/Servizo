import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../theme/theme';

const ChefCard = ({chef, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={chef.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{chef.name}</Text>
        <Text style={styles.cuisine}>{chef.cuisine}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐ {chef.rating}</Text>
          <Text style={styles.price}>${chef.pricePerHour}/hr</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    marginBottom: SIZES.base * 2,
    flexDirection: 'row',
    padding: SIZES.base,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: SIZES.base,
  },
  info: {
    flex: 1,
    marginLeft: SIZES.base * 2,
  },
  name: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  cuisine: {
    color: COLORS.gray,
    fontSize: SIZES.font,
    marginTop: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  rating: {
    color: COLORS.white,
    fontSize: SIZES.font,
  },
  price: {
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontWeight: 'bold',
  },
});

export default ChefCard;
