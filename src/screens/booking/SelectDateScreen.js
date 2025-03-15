import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';

const SelectDateScreen = ({ navigation }) => {
  const [isMultipleDays, setIsMultipleDays] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedTimeSlots, setSelectedTimeSlots] = useState({});

  const handleDateSelect = (day) => {
    const dateString = day.dateString;
    
    if (isMultipleDays) {
      // Multiple dates selection logic
      const updatedDates = { ...selectedDates };
      if (updatedDates[dateString]) {
        delete updatedDates[dateString];
        // Remove time slots for this date
        const updatedTimeSlots = { ...selectedTimeSlots };
        delete updatedTimeSlots[dateString];
        setSelectedTimeSlots(updatedTimeSlots);
      } else {
        updatedDates[dateString] = { selected: true, selectedColor: COLORS.primary };
      }
      setSelectedDates(updatedDates);
    } else {
      // Single date selection
      const newSelectedDates = {
        [dateString]: { selected: true, selectedColor: COLORS.primary }
      };
      setSelectedDates(newSelectedDates);
      
      // Reset time slots for single date selection
      setSelectedTimeSlots({
        [dateString]: { breakfast: false, lunch: false, dinner: false }
      });
    }
  };

  const renderSelectedDatesTable = () => {
    const selectedDatesList = Object.keys(selectedDates).sort();
    
    return selectedDatesList.map(date => (
      <View key={date} style={styles.timeSlotRow}>
        <Text style={styles.dateCell}>
          {new Date(date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
        </Text>
        {['breakfast', 'lunch', 'dinner'].map(meal => (
          <TouchableOpacity 
            key={`${date}-${meal}`}
            style={styles.slotCell}
            onPress={() => toggleTimeSlot(date, meal)}>
            <Icon 
              name={selectedTimeSlots[date]?.[meal] ? "checkmark-circle" : "ellipse-outline"} 
              size={20} 
              color={selectedTimeSlots[date]?.[meal] ? "#4CAF50" : COLORS.gray} 
            />
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  const toggleTimeSlot = (date, meal) => {
    setSelectedTimeSlots(prev => ({
      ...prev,
      [date]: {
        ...prev[date],
        [meal]: !prev[date]?.[meal]
      }
    }));
  };

  // Add this new function to handle multiple days toggle
  const handleMultipleDaysToggle = (value) => {
    setIsMultipleDays(value);
    if (!value) {
      // If switching to single day, keep only the most recent selection if any
      const dates = Object.keys(selectedDates);
      if (dates.length > 0) {
        const lastDate = dates[dates.length - 1];
        setSelectedDates({
          [lastDate]: { selected: true, selectedColor: COLORS.primary }
        });
        setSelectedTimeSlots({
          [lastDate]: selectedTimeSlots[lastDate] || { breakfast: false, lunch: false, dinner: false }
        });
      }
    }
  };

  // Update the toggle buttons' onPress handlers
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={COLORS.white} />
      </TouchableOpacity>

      <Text style={styles.title}>
        Select <Text style={styles.highlight}>Booking Dates</Text>
      </Text>

      <View style={styles.multipleDaysContainer}>
        <Text style={styles.multipleDaysText}>Multiple Days</Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, isMultipleDays && styles.toggleButtonActive]}
            onPress={() => handleMultipleDaysToggle(true)}>
            <Text style={[styles.toggleText, isMultipleDays && styles.toggleTextActive]}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, !isMultipleDays && styles.toggleButtonActive]}
            onPress={() => handleMultipleDaysToggle(false)}>
            <Text style={[styles.toggleText, !isMultipleDays && styles.toggleTextActive]}>No</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: COLORS.lightGray,
          calendarBackground: COLORS.lightGray,
          textSectionTitleColor: COLORS.white,
          selectedDayBackgroundColor: COLORS.primary,
          selectedDayTextColor: COLORS.white,
          todayTextColor: COLORS.primary,
          dayTextColor: COLORS.white,
          textDisabledColor: COLORS.gray,
          monthTextColor: COLORS.white,
          arrowColor: COLORS.primary,
        }}
        markedDates={selectedDates}
        onDayPress={handleDateSelect}
        allowSelectionOutOfRange={false}
      />

      <View style={styles.timeSlotsContainer}>
        <View style={styles.timeSlotHeader}>
          <Text style={styles.headerCell}>Date</Text>
          <Text style={styles.headerCell}>Breakfast</Text>
          <Text style={styles.headerCell}>Lunch</Text>
          <Text style={styles.headerCell}>Dinner</Text>
        </View>
        <ScrollView>
          {renderSelectedDatesTable()}
        </ScrollView>
      </View>

      <TouchableOpacity 
        style={[
          styles.confirmButton,
          Object.keys(selectedDates).length === 0 && styles.disabledButton
        ]}
        disabled={Object.keys(selectedDates).length === 0}
        onPress={() => navigation.navigate('SelectChef', {
          selectedDates: selectedTimeSlots
        })}>
        <Text style={styles.confirmButtonText}>Confirm Date & Time</Text>
      </TouchableOpacity>
    </View>
  );
};

// Add these new styles
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
    marginBottom: SIZES.base * 2,
  },
  highlight: {
    color: COLORS.primary,
  },
  multipleDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.base * 2,
  },
  multipleDaysText: {
    color: COLORS.white,
    fontSize: 16,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: 2,
  },
  toggleButton: {
    paddingHorizontal: SIZES.base * 2,
    paddingVertical: SIZES.base,
    borderRadius: SIZES.base - 2,
  },
  toggleButtonActive: {
    backgroundColor: COLORS.primary,
  },
  toggleText: {
    color: COLORS.gray,
  },
  toggleTextActive: {
    color: COLORS.white,
  },
  calendar: {
    marginBottom: SIZES.base * 2,
    borderRadius: SIZES.base,
  },
  timeSlotsContainer: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base,
    marginBottom: SIZES.base * 2,
  },
  timeSlotHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    paddingBottom: SIZES.base,
    marginBottom: SIZES.base,
  },
  headerCell: {
    flex: 1,
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '600',
  },
  timeSlotRow: {
    flexDirection: 'row',
    paddingVertical: SIZES.base,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray + '40',
  },
  dateCell: {
    flex: 1,
    color: COLORS.white,
    textAlign: 'center',
  },
  slotCell: {
    flex: 1,
    alignItems: 'center',
    padding: SIZES.base,
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.base * 1.5,
    borderRadius: SIZES.base,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.5,
  },
  slotCell: {
    flex: 1,
    alignItems: 'center',
    padding: SIZES.base,
  },
});

export default SelectDateScreen;