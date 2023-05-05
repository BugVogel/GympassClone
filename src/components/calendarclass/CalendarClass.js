import React from 'react';
import SectionTitle from '../sectiontitle/SectionTitle';
import {
  AppIncludedWrapper,
  AppsListItemView,
  AppsListWraper,
  CalendarClassContainer,
  DatesView,
  SubTitleView,
} from './styles';
import {TextDefault} from '../../styles/UIComponents';
import DateShow from './DateShow';
import AppsIncludedBanner from './AppsIncludedBanner';
import ListItem from '../listitem/ListItem';
import {mockData} from '../../storage/mockData';

const CalendarClass = () => {
  const date = new Date();

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
      <AppIncludedWrapper>
        <AppsIncludedBanner />
      </AppIncludedWrapper>

      <AppsListWraper horizontal showsHorizontalScrollIndicator={false}>
        {mockData.appsIncluded.map((item, index) => {
          return (
            <AppsListItemView key={index}>
              <ListItem
                source={item.logoUri}
                title={item.enterpriseName}
                subTitles={[{...item.subtitleText}]}
              />
            </AppsListItemView>
          );
        })}
      </AppsListWraper>
    </CalendarClassContainer>
  );
};

export default CalendarClass;
