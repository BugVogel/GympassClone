import React from 'react';
import {CheckboxContainer, CheckboxCore, CheckboxWrapper} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const CheckBox = props => {
  return <CheckboxCore checked={props.checked} />;
};

export default CheckBox;
