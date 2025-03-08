import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';
import {IMAGES} from '../assets'; // Ensure this path is correct
import {COLORS} from '../common';
import {moderateScale} from '../common/Scale';

const {width} = Dimensions.get('window'); // Get screen width

const data = [
  {
    id: '1',
    image: IMAGES.onboarding1,
    title: 'Select Location',
    description:
      "A simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: '2',
    image: IMAGES.onboarding2,
    title: 'Select Cuisine',
    description:
      "A simplyssss dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: '3',
    image: IMAGES.onboarding3,
    title: 'Book Your Chef For Your Day',
    description:
      "A simplyttt dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const Onboarding = ({route, navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null); // Create a ref for the FlatList

  // Function to go to the next item
  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
    flatListRef.current.scrollToIndex({animated: true, index: nextIndex}); // Scroll to the next index
  };

  // Function to go to the previous item
  const prevSlide = () => {
    if (currentIndex == 2) {
      navigation.navigate('LoginScreen');
    } else {
      const prevIndex = (currentIndex + 1 + data.length) % data.length;
      setCurrentIndex(prevIndex);
      flatListRef.current.scrollToIndex({animated: true, index: prevIndex}); // Scroll to the previous index
    }
  };

  // Function to skip to the last item
  const skipToEnd = () => {
    const lastIndex = data.length - 1;
    setCurrentIndex(lastIndex);
    flatListRef.current.scrollToIndex({animated: true, index: lastIndex}); // Jump to the last item
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{height: moderateScale(60)}}>
          {currentIndex != 2 && (
            <TouchableOpacity onPress={skipToEnd} style={styles.skipButton}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.topView}>
          <FlatList
            ref={flatListRef} // Attach the ref here
            data={data}
            style={{marginHorizontal: moderateScale(20)}}
            horizontal
            renderItem={({item}) => (
              <View style={styles.slide}>
                <Text numberOfLines={2} style={styles.title}>
                  {item.title}
                </Text>
                <Image source={item.image} style={styles.imageView} />
              </View>
            )}
            keyExtractor={item => item.id}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.dotContainer}>
          <View style={styles.dotsAndDescription}>
            <Text style={styles.description}>
              {data[currentIndex].description}
            </Text>
          </View>
          <TouchableOpacity onPress={nextSlide} style={styles.navIcon}>
            <Image source={IMAGES.nextIcon} style={styles.icon} />
            {/* Adjust image path */}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={{flexDirection: 'row'}}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity onPress={prevSlide} style={styles.navIcon}>
          <Image source={IMAGES.backImage} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purpleApp,
  },
  topView: {
    marginTop: moderateScale(10),
  },
  slide: {
    width: width - moderateScale(80), // Full width of the screen
    marginHorizontal: moderateScale(20),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: moderateScale(20),
    borderColor: '#ddd',
    padding: 20,
  },
  title: {
    fontSize: moderateScale(28),
    width: moderateScale(240),
    fontWeight: 'bold',
  },
  imageView: {
    height: moderateScale(200),
    width: moderateScale(200),
    resizeMode: 'contain',
    padding: moderateScale(10),
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(20),
    marginHorizontal: moderateScale(20),
  },
  dotsAndDescription: {
    flex: 1,
    // alignItems: 'center',
    marginHorizontal: moderateScale(15),
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#007BFF',
  },
  inactiveDot: {
    backgroundColor: '#ddd',
  },
  navIcon: {
    padding: moderateScale(10),
  },
  icon: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  description: {
    textAlign: 'left',
    marginTop: moderateScale(10),
    fontSize: moderateScale(13),
    letterSpacing: 0.1,
    color: COLORS.black,
  },
  skipButton: {
    alignSelf: 'flex-end',
    margin: moderateScale(10),
    padding: moderateScale(10),
    backgroundColor: COLORS.btnColor,
    borderRadius: moderateScale(5),
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomView: {
    flexDirection: 'row',
    flex: 0.2,
    justifyContent: 'space-between',
    margin: moderateScale(20),
    alignItems: 'center',
  },
});

export default Onboarding;
