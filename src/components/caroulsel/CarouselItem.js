import React from 'react';
import {View, Image} from 'react-native';
import {ImageCarousel, ImageCarouselContainer} from './styles';

const CarouselItem = props => {
  return (
    <ImageCarouselContainer>
      <ImageCarousel source={{uri: props.uri}} />
    </ImageCarouselContainer>
  );
};

export default CarouselItem;
