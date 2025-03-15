import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {COLORS, SIZES} from '../../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const SelectLocationScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const savedAddresses = [
    {id: 1, name: 'Home', address: '123 High Street, London, W1K 1AB, UK'},
    {
      id: 2,
      name: "Peter's place",
      address: '456 High Street, London, W1K 1AB, UK',
    },
    {
      id: 3,
      name: 'Robert Home',
      address: '789 High Street, London, W1K 1AB, UK',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        Select a <Text style={styles.highlight}>Location</Text>
      </Text>

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} color={COLORS.gray} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for area, street name..."
          placeholderTextColor={COLORS.gray}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <Text style={styles.sectionTitle}>Saved Addresses</Text>

      <ScrollView style={styles.addressList}>
        {savedAddresses.map(address => (
          <TouchableOpacity
            key={address.id}
            style={styles.addressCard}
            onPress={() => navigation.navigate('SelectDateScreen', {address})}>
            <View style={styles.addressInfo}>
              <Text style={styles.addressName}>{address.name}</Text>
              <Text style={styles.addressText}>{address.address}</Text>
            </View>
            <Icon name="chevron-forward" size={24} color={COLORS.gray} />
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SIZES.base * 2,
  },
  header: {
    marginBottom: SIZES.base * 2,
  },
  title: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: SIZES.base * 3,
  },
  highlight: {
    color: COLORS.primary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    marginBottom: SIZES.base * 3,
  },
  searchInput: {
    flex: 1,
    color: COLORS.white,
    marginLeft: SIZES.base,
    fontSize: 14,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: SIZES.base * 2,
  },
  addressList: {
    flex: 1,
  },
  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.base,
    padding: SIZES.base * 1.5,
    marginBottom: SIZES.base,
  },
  addressInfo: {
    flex: 1,
    marginRight: SIZES.base,
  },
  addressName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  addressText: {
    color: COLORS.gray,
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: SIZES.base * 2,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  navItem: {
    padding: SIZES.base,
  },
});

export default SelectLocationScreen;
