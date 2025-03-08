import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import {COLORS} from '../common';
import {moderateScale, scale} from '../common/Scale';
import {IMAGES} from '../assets';

const dietaryOptions = [
  'None',
  'Non Veg',
  'Low Carb',
  'Vegan',
  'High Fat',
  'Gluten',
  'Keto',
  'No Beef',
  'Halal',
  'Kosher',
  'Sea Food',
  'No Nuts',
];

const DietaryPlanScreen = ({route, navigation}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState('');

  const toggleOption = option => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };


  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={IMAGES.backIconImage} />
          </TouchableOpacity>
          <Image source={IMAGES.drawerBar} />
        </View>
        <View style={{marginVertical: moderateScale(15)}}>
          <Text style={styles.header}>Select Your Dietary Plan</Text>
          <ScrollView contentContainerStyle={styles.optionsContainer}>
            {dietaryOptions.map(option => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  selectedOptions.includes(option) && styles.selectedOption,
                ]}
                onPress={() => toggleOption(option)}>
                <Text
                  style={[
                    styles.optionText,
                    selectedOptions.includes(option) &&
                      styles.selectedOptionText,
                  ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
            <View style={styles.allergiesView}>
              <Text style={styles.allergiesText}>{'Any Allergies'}</Text>
              <CustomTextInput
                mainStyle={styles.textInput}
                placeholder="Tell Our Chefs More About Your Dietary Plan..."
                multiline
                value={additionalInfo}
                onChangeText={setAdditionalInfo}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <CustomButton
        flag={0}
        title={'Next'}
        onPress={()=>{
navigation.navigate('FoodType')
        }}
        style={{marginTop: moderateScale(30)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    backgroundColor: '#F9F9F9',
  },
  headerView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: moderateScale(5),
  },
  header: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionButton: {
    padding: moderateScale(10),
    backgroundColor: '#FFF',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: '#ddd',
    margin: moderateScale(5),
  },
  selectedOption: {
    backgroundColor: COLORS.btnColor,
  },
  optionText: {
    color: COLORS.black,
    fontSize: moderateScale(12),
    fontWeight: '500',
  },
  selectedOptionText: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: COLORS.white,
  },
  allergiesView: {
    marginTop: moderateScale(20),
  },
  allergiesText: {
    marginTop: moderateScale(10),
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
  textInput: {
    height: moderateScale(100),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: scale(10),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default DietaryPlanScreen;
