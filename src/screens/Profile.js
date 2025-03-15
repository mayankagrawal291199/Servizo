import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../theme/theme';
import {IMAGES} from '../assets';

const Profile = ({navigation}) => {
  const profileOptions = [
    {icon: 'person-outline', title: 'Personal Details'},
    {icon: 'card-outline', title: 'Payment Methods'},
    {icon: 'settings-outline', title: 'Settings'},
    {icon: 'help-circle-outline', title: 'Help Center'},
    {icon: 'information-circle-outline', title: 'About Servizo'},
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={IMAGES.dummyImage} style={styles.profileImage} />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.optionsContainer}>
        {profileOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionItem}
            onPress={() => navigation.navigate(option.title.replace(' ', ''))}>
            <View style={styles.optionContent}>
              <Icon name={option.icon} size={24} color={COLORS.primary} />
              <Text style={styles.optionText}>{option.title}</Text>
            </View>
            <Icon name="chevron-forward" size={24} color={COLORS.gray} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    alignItems: 'center',
    padding: SIZES.base * 3,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: SIZES.base * 2,
  },
  name: {
    color: COLORS.white,
    fontSize: SIZES.large,
    fontWeight: 'bold',
  },
  email: {
    color: COLORS.gray,
    fontSize: SIZES.font,
    marginTop: SIZES.base,
  },
  optionsContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.base,
    margin: SIZES.base * 2,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.base * 2,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    marginLeft: SIZES.base * 2,
  },
  logoutButton: {
    backgroundColor: COLORS.error,
    margin: SIZES.base * 2,
    padding: SIZES.base * 2,
    borderRadius: SIZES.base,
    alignItems: 'center',
  },
  logoutText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
});

export default Profile;
