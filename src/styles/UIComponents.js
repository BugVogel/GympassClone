import styled from 'styled-components';
// import {TouchableWithoutFeedback} from 'react-native'

export const Avatar = styled.Image.attrs(props => ({
  resizeMode: 'contain',
  source: {
    uri:
      props.source?.uri ||
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },
}))`
  height: 45px;
  width: 45px;
  border-radius: 20px;
`;

export const TextDefault = styled.Text`
  font-size: ${props => (props?.fontSize ? props.fontSize : `12`)}px;
  ${props => (props?.bold ? `font-weight: bold;` : ``)}
  color: ${props => (props?.color ? props.color : `black`)};
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
