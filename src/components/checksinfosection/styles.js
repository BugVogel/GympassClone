import styled from 'styled-components';

export const CheckInfoSectionContainer = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 50px;
  padding-left: 10px;
  padding-bottom: 30px;
  background-color: white;
`;

export const CheckInfoSectionTitleView = styled.View`
  margin-bottom: 30px;
`;

export const CheckInfoSectionContentView = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const CheckInforSectionContentImage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CheckInfoSectionContentInformation = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const CheckInfoSectionImage = styled.Image.attrs(props => ({
  resizeMode: 'contain',
}))`
  width: 100px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NumInfoText = styled.Text`
  color: #9501c6;
  font-size: 40px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const NumInfoView = styled.View`
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
`;
