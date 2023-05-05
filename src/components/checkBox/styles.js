import styled from 'styled-components';
// import {TouchableWithoutFeedback} from 'react-native'

export const CheckboxWrapper = styled.TouchableWithoutFeedback`
  align-items: center;
  justify-content: center;
  margin-horizontal: 30px;
`;
export const CheckboxContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 6px;
  width: 6px;
  background-color: #ac00e5;
`;

export const CheckboxCore = styled.View`
  background-color: ${props =>
    props.checked ? '#9501c6' : 'rgba(172, 0, 229, 0.4)'};
  border-radius: 50px;
  height: 6px;
  width: 6px;
`;
