import React from 'react';
import {
  HeaderContainer,
  HeaderProfileInfoContainer,
  HeaderTextProfileInfo,
  HeaderTextProfileSubInfo,
  HeaderAvatarWrapper,
  HeaderIconContainer,
} from './styles';
import {Avatar} from '../../styles/UIComponents';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
// import {useRoute} from '@react-navigation/native';

const Header = props => {
  const navigation = useNavigation();
  const route = useRoute();
  // console.warn(route.name);

  return (
    <TouchableOpacity
      style={{flexDirection: 'row'}}
      onPress={() =>
        route?.name === 'Main' || route?.name === 'Home'
          ? navigation.navigate('Menu')
          : navigation.goBack()
      }>
      <HeaderContainer>
        <HeaderAvatarWrapper>
          <Avatar />
        </HeaderAvatarWrapper>
        <HeaderProfileInfoContainer>
          <HeaderTextProfileInfo>Bruno Vogel</HeaderTextProfileInfo>
          <HeaderTextProfileSubInfo>Silver</HeaderTextProfileSubInfo>
          <HeaderTextProfileSubInfo>
            Gympass ID: 12395852172
          </HeaderTextProfileSubInfo>
        </HeaderProfileInfoContainer>
        <HeaderIconContainer>
          <Icon
            name={
              route?.name === 'Main' || route?.name === 'Home'
                ? 'chevron-down-sharp'
                : 'chevron-up-sharp'
            }
            size={20}
            color="black"
          />
        </HeaderIconContainer>
      </HeaderContainer>
    </TouchableOpacity>
  );
};
export default Header;
