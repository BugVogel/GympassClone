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

  // const numberOfLines = props?.ItemsAdjusts ?  props.ItemsAdjusts : {};
  const titleTextProps = props?.title?.textProps ? props?.title?.textProps : {};

  return (
    <ListItemContainer>
      <Avatar {...source} />
      <ContentView bottomLine={props?.bottomLine}>
        <TextView>
          {title?.icon && (
            <IconView>
              <Icon name={title.icon} size={12} color="#444649" />
            </IconView>
          )}
          <TextDefault fontSize={15} {...titleTextProps}>
            {title.text}
          </TextDefault>
        </TextView>
        {subTitles.map((item, index) => {
          const textProps = item?.textProps ? item?.textProps : {};

          return (
            <TextView key={index}>
              {item?.icon && (
                <IconView>
                  <Icon name={item.icon} size={12} color="#444649" />
                </IconView>
              )}
              <TextDefault {...textProps}> {item.text}</TextDefault>
            </TextView>
          );
        })}
      </ContentView>
    </ListItemContainer>
  );
};

export default ListItem;
