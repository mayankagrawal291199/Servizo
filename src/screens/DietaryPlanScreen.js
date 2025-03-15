import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {COLORS, SIZES} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const DietaryPlanScreen = ({navigation}) => {
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [allergies, setAllergies] = useState('');
  const [notes, setNotes] = useState('');

  const dietaryOptions = [
    'Paleo',
    'Non-Veg',
    'Low Carb',
    'Vegan',
    'Gluten',
    'Clean',
    'Keto',
    'Sugar',
    'No Pork',
    'No Fish',
    'Halal',
    'Low Salt',
    'No Nuts',
  ];

  const toggleDiet = diet => {
    if (selectedDiets.includes(diet)) {
      setSelectedDiets(selectedDiets.filter(item => item !== diet));
    } else {
      setSelectedDiets([...selectedDiets, diet]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={COLORS.white} />
      </TouchableOpacity>

      <Text style={styles.title}>
        Select <Text style={styles.highlight}>Dietary Plan</Text>
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dietaryGrid}>
          {dietaryOptions.map((diet, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dietButton,
                selectedDiets.includes(diet) && styles.selectedDiet,
              ]}
              onPress={() => toggleDiet(diet)}>
              <Text
                style={[
                  styles.dietText,
                  selectedDiets.includes(diet) && styles.selectedDietText,
                ]}>
                {diet}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            Tell Our Chefs More About Your Dietary Plan
          </Text>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={4}
            value={allergies}
            onChangeText={setAllergies}
            placeholder="Type your dietary preferences here..."
            placeholderTextColor={COLORS.gray}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            Tell Our Chefs More About Your Allergies...
          </Text>
          <TextInput
            style={styles.textArea}
            multiline
            numberOfLines={4}
            value={notes}
            onChangeText={setNotes}
            placeholder="Type your allergies here..."
            placeholderTextColor={COLORS.gray}
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() =>
          navigation.navigate('ChefListScreen', {
            selectedDiets,
            allergies,
            notes,
          })
        }>
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
  backButton: {
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
  dietaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: SIZES.base * 3,
  },
  dietButton: {
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: SIZES.base * 2,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.base,
    marginBottom: SIZES.base,
    width: '23%',
    alignItems: 'center',
  },
  selectedDiet: {
    backgroundColor: COLORS.primary,
  },
  dietText: {
    color: COLORS.gray,
    fontSize: 12,
  },
  selectedDietText: {
    color: COLORS.white,
  },
  inputContainer: {
    marginBottom: SIZES.base * 3,
  },
  inputLabel: {
    color: COLORS.white,
    marginBottom: SIZES.base,
    fontSize: 14,
  },
  textArea: {
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base,
    color: COLORS.white,
    height: 100,
    textAlignVertical: 'top',
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
});

export default DietaryPlanScreen;
