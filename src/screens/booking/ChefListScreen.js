// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { COLORS, SIZES } from '../../theme/theme';
// import Icon from 'react-native-vector-icons/Ionicons';

// const ChefListScreen = ({ navigation }) => {
//   const chefs = [
//     {
//       id: 1,
//       name: 'Harleigh Pinada',
//       experience: '10 years of experience',
//       rating: 4.8,
//       price: '50',
//       image:null,
//     },
//     {
//       id: 2,
//       name: 'Shivaram',
//       experience: '8 years of experience',
//       rating: 4.5,
//       price: '45',
//       image:null,
//     },
//     // Add more chefs...
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={24} color={COLORS.white} />
//         </TouchableOpacity>
//         <View style={styles.cuisineSelector}>
//           <Text style={styles.selectedCuisine}>Selected Cuisine</Text>
//           <Icon name="chevron-down" size={24} color={COLORS.white} />
//         </View>
//       </View>

//       <ScrollView style={styles.chefList}>
//         {chefs.map(chef => (
//           <TouchableOpacity
//             key={chef.id}
//             style={styles.chefCard}
//             onPress={() => navigation.navigate('ChefDetail', { chef })}>
//             <Image source={chef.image} style={styles.chefImage} />
//             <View style={styles.chefInfo}>
//               <Text style={styles.chefName}>{chef.name}</Text>
//               <Text style={styles.experience}>{chef.experience}</Text>
//               <View style={styles.ratingContainer}>
//                 <Icon name="star" size={16} color="#FFD700" />
//                 <Text style={styles.rating}>{chef.rating}</Text>
//               </View>
//               <Text style={styles.price}>£ {chef.price}/hour</Text>
//             </View>
//             <TouchableOpacity style={styles.bookButton}>
//               <Text style={styles.bookButtonText}>Book</Text>
//             </TouchableOpacity>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//     padding: SIZES.base * 2,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: SIZES.base * 3,
//   },
//   cuisineSelector: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedCuisine: {
//     color: COLORS.white,
//     fontSize: 18,
//     fontWeight: '600',
//     marginRight: SIZES.base,
//   },
//   chefList: {
//     flex: 1,
//   },
//   chefCard: {
//     flexDirection: 'row',
//     backgroundColor: COLORS.lightGray,
//     borderRadius: SIZES.base,
//     padding: SIZES.base,
//     marginBottom: SIZES.base * 2,
//     alignItems: 'center',
//   },
//   chefImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//   },
//   chefInfo: {
//     flex: 1,
//     marginLeft: SIZES.base * 2,
//   },
//   chefName: {
//     color: COLORS.white,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   experience: {
//     color: COLORS.gray,
//     fontSize: 12,
//     marginTop: 2,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 4,
//   },
//   rating: {
//     color: COLORS.white,
//     marginLeft: 4,
//   },
//   price: {
//     color: COLORS.primary,
//     fontSize: 14,
//     fontWeight: '600',
//     marginTop: 4,
//   },
//   bookButton: {
//     backgroundColor: COLORS.primary,
//     paddingHorizontal: SIZES.base * 2,
//     paddingVertical: SIZES.base,
//     borderRadius: SIZES.base,
//   },
//   bookButtonText: {
//     color: COLORS.white,
//     fontSize: 14,
//     fontWeight: '500',
//   },
// });

// export default ChefListScreen;


import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS } from '../../common';
import { moderateScale } from '../../common/Scale';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGES } from '../../assets';

const ChefListScreen = ({ navigation }) => {
  const chefs = [
    {
      id: 1,
      name: 'Harleigh Pineda',
      rating: 4.5,
      experience: '4+ Years',
      image: IMAGES.dummyImage,
    },
    {
      id: 2,
      name: 'Shivaram',
      rating: 4.5,
      experience: '4+ Years',
      image: IMAGES.dummyImage,
    },
    {
      id: 3,
      name: 'Simon says hi',
      rating: 4.5,
      experience: '4+ Years',
      image: IMAGES.dummyImage,
    },
    {
      id: 4,
      name: 'Akshay Kumar',
      rating: 4.5,
      experience: '4+ Years',
      image: IMAGES.dummyImage,
    },
  ];

  const renderChefCard = (chef) => (
    <TouchableOpacity 
      key={chef.id} 
      style={styles.chefCard}
      onPress={() => navigation.navigate('ChefDetailScreen', { chef })}>
      <Image source={chef.image} style={styles.chefImage} />
      <View style={styles.chefInfo}>
        <Text style={styles.chefName}>{chef.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{chef.rating}</Text>
          <Icon name="star" size={16} color="#FFD700" />
        </View>
        <Text style={styles.experience}>{chef.experience}</Text>
      </View>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={IMAGES.backIconImage} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Selected <Text style={styles.highlight}>Cuisine</Text></Text>
      
      <View style={styles.selectedCuisines}>
        <View style={styles.cuisineTag}>
          <Text style={styles.cuisineText}>Indian</Text>
        </View>
        <View style={styles.cuisineTag}>
          <Text style={styles.cuisineText}>Italian</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>Selected <Text style={styles.highlight}>Chef</Text></Text>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {chefs.map(chef => renderChefCard(chef))}
      </ScrollView>
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
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: moderateScale(15),
  },
  subtitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginVertical: moderateScale(15),
  },
  highlight: {
    color: COLORS.btnColor,
  },
  selectedCuisines: {
    flexDirection: 'row',
    marginBottom: moderateScale(20),
  },
  cuisineTag: {
    backgroundColor: COLORS.btnColor,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },
  cuisineText: {
    color: COLORS.white,
    fontWeight: '500',
  },
  chefCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(15),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  chefImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  chefInfo: {
    flex: 1,
    marginLeft: moderateScale(15),
  },
  chefName: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginBottom: moderateScale(5),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(5),
  },
  rating: {
    marginRight: moderateScale(5),
  },
  experience: {
    color: COLORS.gray,
    fontSize: moderateScale(12),
  },
  bookButton: {
    backgroundColor: COLORS.btnColor,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(20),
  },
  bookButtonText: {
    color: COLORS.white,
    fontWeight: '500',
  },
});

export default ChefListScreen;