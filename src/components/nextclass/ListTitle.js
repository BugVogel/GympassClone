import React from 'react';
import {IconView, ListiTitleView} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextDefault} from '../../styles/UIComponents';

const ListTitle = props => {
  const iconName = props?.iconName || 'user-plus';
  const title = props?.title || 'Inserir título';
  //   console.log(iconName);
  return (
    <ListiTitleView>
      <IconView>
        <Icon name={iconName} size={10} color="#a6b8ea" />
      </IconView>
      <TextDefault bold fontSize={12}>
        {title}
      </TextDefault>
    </ListiTitleView>
  );
};

export default ListTitle;
