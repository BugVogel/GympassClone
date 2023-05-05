import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import NavigatorStack from './routes/NavigatorStack';
import Navigator from './routes/Navigator';

export default props => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
