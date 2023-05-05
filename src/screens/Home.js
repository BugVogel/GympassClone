import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Caroulsel from '../components/caroulsel/Caroulsel';
import Checkinfosection from '../components/checksinfosection/Checkinfosection';
import NextClassSection from '../components/nextclass/NextClassSection';
import {mockData} from '../storage/mockData';
import CalendarClass from '../components/calendarclass/CalendarClass';

const Home = props => {
  const elements = [
    () => <Caroulsel data={mockData.carouselItems} />,
    () => <Checkinfosection />,
    () => <NextClassSection />,
    () => <CalendarClass />,
  ];

  return (
    <>
      {/* <Caroulsel />
      <Checkinfosection /> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={elements}
        renderItem={({item, index}) => {
          const Element = item;
          return <Element key={index} />;
        }}
      />
    </>
  );
};

export default Home;
