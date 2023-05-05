import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {
  ButtonView,
  ClassListContainer,
  IconView,
  ListView,
  ListiTitleView,
  NextClassContainer,
} from './styles';
import SectionTitle from '../sectiontitle/SectionTitle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TextDefault} from '../../styles/UIComponents';
import {mockData} from '../../storage/mockData';
import ListItem from '../listitem/ListItem';
import ListTitle from './ListTitle';
import Individualslist from './IndividualsList';
import Caroulsel from '../caroulsel/Caroulsel';
import {Swipeable} from 'react-native-gesture-handler';
import {Button} from '@rneui/base';

const NextClassSection = props => {
  const lists = [
    {
      component: () => (
        <Individualslist
          title={'Aulas Individuais'}
          data={mockData.individualClasses}
        />
      ),
    },
    {
      component: () => (
        <Individualslist
          iconName={'youtube-play'}
          title={'Aulas em Grupo'}
          data={mockData.groupClasses}
        />
      ),
    },
  ];

  return (
    <NextClassContainer>
      <SectionTitle title="PRÓXIMAS AULAS" />
      {/* <Caroulsel data={lists} component withoutChecks /> */}
      {/* <Swipeable renderRightActions={() => <Button title="teste" />}> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={lists}
        pagingEnabled
        renderItem={({item}) => {
          const Component = item.component;
          return <Component />;
        }}
        horizontal
      />
      <ButtonView>
        <TouchableOpacity onPress={() => {}}>
          <TextDefault bold color={'#9501c6'} fontSize={15}>
            Buscar mais
          </TextDefault>
        </TouchableOpacity>
      </ButtonView>
    </NextClassContainer>
  );
};

export default NextClassSection;
