import React from 'react';
import {TitleView} from './styles';
import {TextDefault} from '../../styles/UIComponents';

const SectionTitle = props => {
  return (
    <TitleView>
      <TextDefault fontSize={13}>{props.title || 'Título'}</TextDefault>
    </TitleView>
  );
};

export default SectionTitle;
