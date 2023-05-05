import React from 'react';
import SectionTitle from '../sectiontitle/SectionTitle';
import {CalendarClassContainer, DatesView, SubTitleView} from './styles';
import {TextDefault} from '../../styles/UIComponents';
import DateShow from './DateShow';

const CalendarClass = () => {
  const date = new Date();
  // console.log(date.getDate());
  // const dd = String(today.getDate()).padStart(2, '0');
  // const mm = String(today.getMonth() + 1).padStart(2, '0');

  // const dayName = today
  //   .toLocaleDateString('pt-br', {weekday: 'short'})
  //   .split('.')[0];
  // const monthName = today
  //   .toLocaleDateString('pt-br', {month: 'short'})
  //   .split('.')[0];
  // const dateString = dayName + '-' + dd + '-' + monthName;

  return (
    <CalendarClassContainer>
      <SectionTitle title="CALENDÁRIO DE AULAS" />
      <SubTitleView>
        <TextDefault fontSize={13}>
          Selecione uma data para ver as aulas disponíveis ou agendada
        </TextDefault>
      </SubTitleView>
      <DatesView horizontal showsHorizontalScrollIndicator={false}>
        {[...Array(14)].map((_, index) => {
          date.setDate(date.getDate() + 1);

          const dd = String(date.getDate()).padStart(2, '0');
          const dayName = date
            .toLocaleDateString('pt-br', {weekday: 'short'})
            .split('.')[0];
          const monthName = date
            .toLocaleDateString('pt-br', {month: 'short'})
            .split('.')[0];

          const dateString = dayName + '-' + dd + '-' + monthName;
          // console.log(dateString);
          return <DateShow key={index} date={dateString} />;
        })}
      </DatesView>
    </CalendarClassContainer>
  );
};

export default CalendarClass;
