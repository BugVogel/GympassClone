import React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Menu from '../screens/Menu';
import HomeScreen from '../screens/Home';
import {Easing} from 'react-native';
import Header from '../components/header/Header';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const customTransition = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['180deg', '0deg'],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.7],
                })
              : 1,
          },
        ],
      },
      opacity: current.opacity,
    };
  },
};

const NavigatorStack = props => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        gestureEnabled: false,
        gestureDirection: 'vertical',
      }}>
      <Stack.Screen
        name="Main"
        component={HomeScreen}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          header: () => <Header />,
          gestureDirection: 'vertical',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: ({current, layouts}) =>
            CardStyleInterpolators.forVerticalIOS({
              current,
              inverted: -1,
              layouts,
            }),
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigatorStack;
