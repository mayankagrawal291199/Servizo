import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FONTS, IMAGES} from '../assets';
import {moderateScale, scale} from '../common/Scale';
import CustomTextInput from '../components/CustomTextInput';
import {COLORS} from '../common';
import CustomButton from '../components/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {isValidEmail, showSimpleAlert} from '../utils/CommonUtils';
import Request from '../api/Request';
import StorageService from '../utils/StorageService';
import {ActivityLoader} from '../components/ActivityLoader';

export default function SelectCuisine({route, navigation}) {
  const [isLoading, setisLoading] = useState(false);
  const [dishes, selectDishes] = useState([
    {dishname: 'Indian'},
    {dishname: 'Italian'},
    {dishname: 'American Chinese'},
    {dishname: 'Thai Cuisine'},
    {dishname: 'Greek American'},
    {dishname: 'Japanes'},
    {dishname: 'Mexican'},
  ]);
  const [selectedDishes, setSelectedDishes] = useState([]); // Store selected dishes as an array

  const toggleDishSelection = dishname => {
    setSelectedDishes(prevSelectedDishes => {
      if (prevSelectedDishes.includes(dishname)) {
        // If the dish is already selected, remove it from the list
        return prevSelectedDishes.filter(item => item !== dishname);
      } else {
        // If the dish is not selected, add it to the list
        return [...prevSelectedDishes, dishname];
      }
    });
  };
  const renderItem = ({item}) => {
    const isSelected = selectedDishes.includes(item.dishname); // Check if this dish is selected

    return (
      <TouchableOpacity
        onPress={() => {
          toggleDishSelection(item.dishname);
        }}>
        <View style={[styles.renderView, isSelected && styles.selectedDish]}>
          <Text
            style={[
              styles.dishNameText,
              isSelected && styles.selecteddishNameText,
            ]}>
            {item.dishname}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={IMAGES.backIconImage} />
        </TouchableOpacity>
        <Image source={IMAGES.drawerBar} />
      </View>
      <View style={styles.bodyView}>
        <Text style={styles.SelectLocationView}>
          {'Select the Cuisine you would like to have'}
        </Text>

        <View style={styles.mainBodyView}>
          <FlatList data={dishes} renderItem={renderItem} />
        </View>
      </View>
      <CustomButton flag={0} onPress={()=>{
        navigation.navigate('ChefAvailability')
      }} style={{alignSelf: 'center'}} title={'Next'} />
      <ActivityLoader loading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purpleApp,
  },
  mainBodyView: {
    marginVertical: moderateScale(10),
    flex: 1,
  },
  headerView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: moderateScale(20),
  },
  bodyView: {
    marginHorizontal: moderateScale(20),
    flex: 1,
  },
  renderView: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(10),
    paddingVertical: moderateScale(15),
  },
  selectedDish: {
    backgroundColor: COLORS.btnColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(10),
    paddingVertical: moderateScale(15),
  },
  dishNameText: {
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
  selecteddishNameText: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: COLORS.white,
  },
  SelectLocationView: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
