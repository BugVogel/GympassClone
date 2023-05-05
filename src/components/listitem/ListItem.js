import React from 'react';
import {ContentView, ListItemContainer, TextView} from './styles';
import {Avatar, TextDefault} from '../../styles/UIComponents';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconView} from '../nextclass/styles';

const ListItem = props => {
  const source = props?.source
    ? {source: {uri: props?.source, resizeMode: 'contain'}}
    : {};
  const title = props?.title ? props.title : {icon: null, text: ''};
  const subTitles = props?.subTitles ? props.subTitles : [];

  return (
    <ListItemContainer>
      <Avatar {...source} />
      <ContentView>
        <TextView>
          {title?.icon && (
            <IconView>
              <Icon name={title.icon} size={12} color="#444649" />
            </IconView>
          )}
          <TextDefault fontSize={15}>{title.text}</TextDefault>
        </TextView>
        {subTitles.map((item, index) => {
          return (
            <TextView key={index}>
              {item?.icon && (
                <IconView>
                  <Icon name={item.icon} size={12} color="#444649" />
                </IconView>
              )}
              <TextDefault> {item.text}</TextDefault>
            </TextView>
          );
        })}
      </ContentView>
    </ListItemContainer>
  );
};

export default ListItem;
