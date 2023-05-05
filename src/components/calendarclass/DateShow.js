import React from 'react';
import {DateShowContainer} from './styles';
import {TextDefault} from '../../styles/UIComponents';

const DateShow = props => {
  const date = props?.date?.split('-') || 'dayString-numDay-month'.split('-');
  const dayString = date[0].toUpperCase();
  const numDay = date[1];
  const month = date[2];
  return (
    <DateShowContainer>
      <TextDefault color="#aeb3bf">{dayString}</TextDefault>
      <TextDefault bold fontSize={25}>
        {numDay}
      </TextDefault>
      <TextDefault>{month}</TextDefault>
    </DateShowContainer>
  );
};

export default DateShow;
