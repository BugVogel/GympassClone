import React from 'react';
import {CheckButtonView} from './styles';
import CheckBox from '../checkBox/CheckBox';

const CarouselGroupCheckBox = props => {
  const size = props.size || 0;

  return (
    <CheckButtonView spacing={size}>
      {[...Array(size)].map((_, index) => (
        <CheckBox
          key={index}
          checked={props.carouselItem === index}
          onPress={() => props.setCarouselItem(index)}
          // checkedIcon="dot-circle-o"
          // uncheckedIcon="circle-o"
        />
      ))}
    </CheckButtonView>
  );
};

export default CarouselGroupCheckBox;
