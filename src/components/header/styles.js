import styled from 'styled-components';

export const HeaderContainer = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: white;
  border-bottom-color: black;
  border-bottom-width: 0.5px;
  flex: 1;
`;

export const HeaderTextProfileInfo = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const HeaderTextProfileSubInfo = styled.Text`
  font-size: 10px;
`;

export const HeaderAvatarWrapper = styled.View`
  padding-left: 10px;
  margin-right: -10px;
  flex: 2;
`;

export const HeaderIconContainer = styled.View`
  margin-right: 20px;
  flex: 1;
`;

export const HeaderProfileInfoContainer = styled.View`
  flex: 8;
`;
