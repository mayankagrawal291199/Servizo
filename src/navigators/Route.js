import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, SafeAreaView, StatusBar, View} from 'react-native';
import SplashScreen from '../screens/SplashScreen';

import {COLORS} from '../common';
import NavigationService from '../utils/NavigationService';
import {hp} from '../utils/constants';
import Toast from 'react-native-toast-message';
import LoginScreen from '../screens/LoginScreen';
import SelectLocation from '../screens/SelectLocation';
import SelectCuisine from '../screens/SelectCuisine';
import Onboarding from '../screens/Onboarding';
import ChefAvailability from '../screens/ChefAvailability';
import DietaryPlanScreen from '../screens/DietaryPlanScreen';
import FoodType from '../screens/FoodType';
import MyBookingsScreen from '../screens/MyBooking';
import Help from '../screens/Help';
import BookingDate from '../screens/BookDate';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import PersonalDetailsScreen from '../screens/auth/PersonalDetailsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import BookingScreen from '../screens/BookingScreen';
import ChatScreen from '../screens/ChatScreen';
import Profile from '../screens/Profile';
import SelectCuisineScreen from '../screens/booking/SelectCuisineScreen';
import SelectLocationScreen from '../screens/booking/SelectLocationScreen';
import SelectDateScreen from '../screens/booking/SelectDateScreen';
import ChefListScreen from '../screens/booking/ChefListScreen';
import ChefDetailScreen from '../screens/booking/ChefDetailScreen';
import ChefChat from '../screens/ChefChat';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
// import SignUpScreen from '../screens/SignUpScreen';
// import VerifySignupScreen from '../screens/VerifySignupScreen';
// import ProfileEditScreen from '../screens/ProfileEditScreen';
// import TabBar from '../screens/TabBar';
// import EventDetail from '../screens/EventDetail';
// import NewEventScreen from '../screens/NewEventScreen';
// import DiscountCompanyPage from '../screens/DiscountCompanyPage';
// import DiscountScreen from '../screens/DiscountScreen';
// import EmergencyContact from '../screens/EmergencyContact';
// import SupplierDetails from '../screens/SupplierDetails';
// import SupplierScreen from '../screens/SupplierScreen';

const Stack = createNativeStackNavigator();
const options2 = {
  // headerShown: false,
  gestureEnabled: false,
  animationEnabled: false,
};
/**
 * Stack navigation screens
 */
const Tab = createBottomTabNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: COLORS.secondary,
//           borderTopWidth: 0
//         },
//         tabBarActiveTintColor: COLORS.primary,
//         tabBarInactiveTintColor: COLORS.gray
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="home-outline" size={24} color={color} />
//           )
//         }}
//       />
//       <Tab.Screen
//         name="Bookings"
//         component={BookingScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="calendar-outline" size={24} color={color} />
//           )
//         }}
//       />
//       <Tab.Screen
//         name="Chat"
//         component={ChatScreen}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="chatbubble-outline" size={24} color={color} />
//           )
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="person-outline" size={24} color={color} />
//           )
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
// ... previous imports remain same ...

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.secondary,
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'calendar' : 'calendar-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={ChatScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'chatbubble' : 'chatbubble-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// ... rest of the navigation code remains same ...

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={({navigation}) => ({
        cardStyleInterpolator: ({
          current,
          next,
          inverted,
          layouts: {screen},
        }) => ({
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [screen.width, 0],
                }),
              },
            ],
          },
        }),
        headerShown: false,
        animation: 'none',
        detachPreviousScreen: !navigation.isFocused(), // For disabling white flickering issue during transition.
      })}>
      <Stack.Screen
        name={'SplashScreen'}
        component={SplashScreen}
        options={options2}
      />
      <Stack.Screen
        name={'Onboarding'}
        component={Onboarding}
        options={options2}
      />
      <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
        options={options2}
      />
      <Stack.Screen
        name={'ForgotPasswordScreen'}
        component={ForgotPasswordScreen}
        options={options2}
      />
      <Stack.Screen
        name={'SignUpScreen'}
        component={SignUpScreen}
        options={options2}
      />
      <Stack.Screen
        name={'PersonalDetails'}
        component={PersonalDetailsScreen}
        options={options2}
      />
      <Stack.Screen
        name={'SelectLocation'}
        component={SelectLocation}
        options={options2}
      />
      <Stack.Screen
        name={'SelectCuisine'}
        component={SelectCuisine}
        options={options2}
      />
      <Stack.Screen
        name={'ChefAvailability'}
        component={ChefAvailability}
        options={options2}
      />
      <Stack.Screen
        name={'DietaryPlanScreen'}
        component={DietaryPlanScreen}
        options={options2}
      />
      <Stack.Screen name={'FoodType'} component={FoodType} options={options2} />
      <Stack.Screen
        name={'MyBookingsScreen'}
        component={MyBookingsScreen}
        options={options2}
      />
      <Stack.Screen name={'Help'} component={Help} options={options2} />
      <Stack.Screen
        name={'BookingDate'}
        component={BookingDate}
        options={options2}
      />
      <Stack.Screen name={'Home'} component={Home} options={options2} />
      <Stack.Screen
        name={'Bookings'}
        component={BookingScreen}
        options={options2}
      />
      <Stack.Screen name={'Chat'} component={ChatScreen} options={options2} />
      <Stack.Screen name={'ChefChat'} component={ChefChat} options={options2} />

      <Stack.Screen name={'Profile'} component={Profile} options={options2} />
      <Stack.Screen
        name={'SelectCuisineScreen'}
        component={SelectCuisineScreen}
        options={options2}
      />
      <Stack.Screen
        name={'SelectLocationScreen'}
        component={SelectLocationScreen}
        options={options2}
      />
      <Stack.Screen
        name={'SelectDateScreen'}
        component={SelectDateScreen}
        options={options2}
      />
      <Stack.Screen
        name={'ChefListScreen'}
        component={ChefListScreen}
        options={options2}
      />
        <Stack.Screen
        name={'ChefDetailScreen'}
        component={ChefDetailScreen}
        options={options2}
      />
      <Stack.Screen name="Main" component={TabNavigator} />
      {/* <Stack.Screen
        name={'ForgotPasswordScreen'}
        component={ForgotPasswordScreen}
        options={options2}
      />
      <Stack.Screen
        name={'SignUpScreen'}
        component={SignUpScreen}
        options={options2}
      />
      <Stack.Screen name={'TabScreen'} component={TabBar} options={options2} />
      <Stack.Screen
        name={'VerifySignupScreen'}
        component={VerifySignupScreen}
        options={options2}
      />
      <Stack.Screen
        name={'ProfileEditScreen'}
        component={ProfileEditScreen}
        options={options2}
      />
      <Stack.Screen
        name={'NewEventScreen'}
        component={NewEventScreen}
        options={options2}
      />
      <Stack.Screen
        name={'EventDetail'}
        component={EventDetail}
        options={options2}
      />
      <Stack.Screen
        name={'DiscountScreen'}
        component={DiscountScreen}
        options={options2}
      />
      <Stack.Screen
        name={'DiscountCompanyPage'}
        component={DiscountCompanyPage}
        options={options2}
      />
      <Stack.Screen
        name={'EmergencyContact'}
        component={EmergencyContact}
        options={options2}
      />
      <Stack.Screen
        name={'SupplierDetails'}
        component={SupplierDetails}
        options={options2}
      />
      <Stack.Screen
        name={'SupplierScreen'}
        component={SupplierScreen}
        options={options2}
      />  */}
    </Stack.Navigator>
  );
};

/**
 * Navigation of all screens
 */
export default function Route({route, navigate}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.light_charcoal}
      />
      <NavigationContainer
        independent={true}
        ref={navigator => NavigationService.setTopLevelNavigator(navigator)}>
        <StackNavigator />
        <Toast />
      </NavigationContainer>
    </View>
  );
}
