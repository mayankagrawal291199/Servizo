import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { COLORS } from '../common';
import { moderateScale } from '../common/Scale';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGES } from '../assets';

const ChefChat = ({ route }) => {
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.chefInfo}>
          <Image source={IMAGES.dummyImage} style={styles.chefImage} />
          <View>
            <Text style={styles.chefName}>Harleigh Pineda</Text>
            <Text style={styles.chefStatus}>Professional Chef</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.chatContainer}>
        <View style={styles.bookingDetails}>
          <Text style={styles.bookingTitle}>Booking Details</Text>
          <View style={styles.timeSlotTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.headerCell}>Date</Text>
              <Text style={styles.headerCell}>B</Text>
              <Text style={styles.headerCell}>L</Text>
              <Text style={styles.headerCell}>D</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.dateCell}>17 Jan</Text>
              <View style={styles.slotCell}>
                <Icon name="checkmark-circle" size={20} color={COLORS.primary} />
              </View>
              <View style={styles.slotCell}>
                <Icon name="close-circle-outline" size={20} color={COLORS.gray} />
              </View>
              <View style={styles.slotCell}>
                <Icon name="checkmark-circle" size={20} color={COLORS.primary} />
              </View>
            </View>
          </View>
          <Text style={styles.dietaryPlan}>Dietary Plan: Low Carb, No Red Meat</Text>
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here..."
          placeholderTextColor={COLORS.gray}
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton}>
          <Icon name="send" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: moderateScale(20),
    backgroundColor: COLORS.lightGray,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray + '20',
  },
  chefInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chefImage: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    marginRight: moderateScale(10),
  },
  chefName: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: COLORS.white,
  },
  chefStatus: {
    color: COLORS.gray,
    fontSize: moderateScale(14),
  },
  chatContainer: {
    flex: 1,
    padding: moderateScale(20),
  },
  bookingDetails: {
    backgroundColor: COLORS.lightGray,
    borderRadius: moderateScale(10),
    padding: moderateScale(15),
    marginBottom: moderateScale(20),
  },
  bookingTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: moderateScale(10),
  },
  timeSlotTable: {
    marginBottom: moderateScale(10),
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray + '40',
    paddingBottom: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '500',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateCell: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.white,
  },
  slotCell: {
    flex: 1,
    alignItems: 'center',
  },
  dietaryPlan: {
    color: COLORS.gray,
    fontSize: moderateScale(14),
  },
  inputContainer: {
    flexDirection: 'row',
    padding: moderateScale(15),
    backgroundColor: COLORS.lightGray,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
    marginRight: moderateScale(10),
    color: COLORS.white,
    maxHeight: moderateScale(100),
  },
  sendButton: {
    backgroundColor: COLORS.primary,
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChefChat;