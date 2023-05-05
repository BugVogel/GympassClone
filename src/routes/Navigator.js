import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';
import SearchScreen from '../screens/Search';
import CheckinScreen from '../screens/Checkin';
import Icon from 'react-native-vector-icons/Ionicons';
// import Header from '../components/header/Header';
import NavigatorStack from './NavigatorStack';

const BottomTab = createBottomTabNavigator();

export default props => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={NavigatorStack}
        options={{
          // header: () => <Header />,
          tabBarLabel: 'Início',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'map' : 'map-outline'}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Busca',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'md-search-sharp' : 'md-search-outline'}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Checkin"
        component={CheckinScreen}
        options={{
          tabBarLabel: 'Check-in',
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
