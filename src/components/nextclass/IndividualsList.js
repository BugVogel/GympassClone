import React from 'react';
import {FlatList} from 'react-native';
import {ClassListContainer, ListView, RenderItemView} from './styles';
import ListItem from '../listitem/ListItem';
import ListTitle from './ListTitle';
import {mockData} from '../../storage/mockData';

const Individualslist = props => {
  return (
    <ClassListContainer>
      <ListTitle iconName={props?.iconName} title={props.title} />
      <ListView>
        {props?.data && (
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={props.data}
            // keyExtractor={item => item.id}
            renderItem={({index, item}) => {
              //   const timeInfo = item.date + ' - ' + item.duration;
              //   console.log(index);
              return (
                <RenderItemView>
                  <ListItem
                    key={index}
                    title={item.name}
                    source={item.avatarImage}
                    subTitles={[{...item.className}, {...item.timeInfo}]}
                  />
                </RenderItemView>
              );
            }}
          />
        )}
      </ListView>
    </ClassListContainer>
  );
};

export default Individualslist;
