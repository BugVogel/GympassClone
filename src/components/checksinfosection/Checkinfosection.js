import React from 'react';
import {ScrollView} from 'react-native';
import {
  CheckInfoSectionContainer,
  CheckInfoSectionContentInformation,
  CheckInfoSectionContentView,
  CheckInfoSectionImage,
  CheckInfoSectionTitleView,
  CheckInforSectionContentImage,
  NumInfoText,
  NumInfoView,
} from './styles';
import {TextDefault} from '../../styles/UIComponents';

const Checkinfosection = props => {
  return (
    <CheckInfoSectionContainer>
      <CheckInfoSectionTitleView>
        <TextDefault bold fontSize={15}>
          E aí, já encontrou uma atividade para amar ? {'<'}3
        </TextDefault>
      </CheckInfoSectionTitleView>
      <CheckInfoSectionContentView>
        <CheckInforSectionContentImage>
          <CheckInfoSectionImage
            // style={{flex: 1, height: 200, width: 100}}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2021/01/12/11/48/runner-5911232_640.png',
            }}
          />
          {/* <Avatar /> */}
        </CheckInforSectionContentImage>
        <CheckInfoSectionContentInformation>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={
              {
                // flex: 1,
                // flexDirection: 'row',
                // justifyContent: 'space-evenly',
              }
            }>
            <NumInfoView>
              <NumInfoText>19</NumInfoText>
              <TextDefault>check-ins</TextDefault>
            </NumInfoView>
            <NumInfoView>
              <NumInfoText>0</NumInfoText>
              <TextDefault>Check-ins seguidos</TextDefault>
            </NumInfoView>
            <NumInfoView>
              <NumInfoText>02</NumInfoText>
              <TextDefault>Academias</TextDefault>
            </NumInfoView>
            <NumInfoView>
              <NumInfoText>01</NumInfoText>
              <TextDefault>Bairros</TextDefault>
            </NumInfoView>
            <NumInfoView>
              <NumInfoText>01</NumInfoText>
              <TextDefault>Cidades</TextDefault>
            </NumInfoView>
          </ScrollView>
        </CheckInfoSectionContentInformation>
      </CheckInfoSectionContentView>
    </CheckInfoSectionContainer>
  );
};

export default Checkinfosection;

// 'https://pixabay.com/static/frontend/3c346409d336d5f09a7f.svg'
