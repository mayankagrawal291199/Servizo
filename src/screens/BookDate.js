import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {IMAGES} from '../assets';
import CustomButton from '../components/CustomButton';
import {Calendar} from 'react-native-calendars';
import {COLORS} from '../common';
import {moderateScale} from '../common/Scale';

const BookingDate = ({route, navigation}) => {
  const [selectMultiple, setselectMultiple] = useState('YES');
  const [selected, setSelected] = useState({});
  const onDayPress = day => {
    const newSelected = {...selected};
    if (newSelected[day.dateString]) {
      delete newSelected[day.dateString];
    } else {
      newSelected[day.dateString] = {selected: true, marked: true};
    }
    setSelected(newSelected);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={IMAGES.backIconImage} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Select Date of Booking</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.subtitle}>Multiple days</Text>

          <View style={styles.multipleDaysContainer}>
            <TouchableOpacity
              onPress={() => {
                setselectMultiple('NO');
              }}
              style={[
                styles.unselectedType,
                selectMultiple == 'NO' && styles.selectedType,
              ]}>
              <Text style={styles.multipleDaysText}>NO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setselectMultiple('YES');
              }}
              style={[
                styles.unselectedType,
                selectMultiple == 'YES' && styles.selectedType,
              ]}>
              <Text style={styles.multipleDaysText}>YES</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Calendar Placeholder */}
        <View style={styles.calendar}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={selected}
            markingType={'simple'}
            //   style={styles.calendar}
            theme={{
              selectedDayBackgroundColor: '#F7C74C',
              todayTextColor: '#F7C74C',
              dayTextColor: '#000',
              monthTextColor: '#000',
              arrowColor: '#F7C74C',
            }}
          />
          {/* Here you can implement a calendar component */}
        </View>

        <Text style={styles.timeSelectionTitle}>Select Time of Booking</Text>
        <ScrollView style={styles.timeSelectionList}>
          {['Breakfast', 'Lunch', 'Dinner'].map((time, index) => (
            <View key={index} style={styles.timeItem}>
              <Text style={styles.timeText}>{time}</Text>
              <Text style={styles.checkmark}>✓</Text>
            </View>
          ))}
        </ScrollView>
        <CustomButton flag={0} title={'Confirm Date & Time'} />
      </ScrollView>
      {/* 
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Date & Time</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#F7C74C',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: moderateScale(18),
    marginBottom: 20,
  },
  multipleDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  multipleDaysText: {
    fontSize: 16,
    color: '#000',
  },
  selectedType: {
    backgroundColor: COLORS.yellowApp,
    justifyContent: 'center',
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(10),
  },
  unselectedType: {
    backgroundColor: COLORS.grayShade1,
    justifyContent: 'center',
    paddingVertical: moderateScale(2),
    paddingHorizontal: moderateScale(10),
  },
  calendar: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  calendarText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeSelectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeSelectionList: {
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  timeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  timeText: {
    fontSize: 16,
  },
  checkmark: {
    fontSize: 16,
    color: '#F7C74C',
  },
  confirmButton: {
    backgroundColor: '#F7C74C',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default BookingDate;
