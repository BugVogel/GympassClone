import React from 'react';
import {
  AppsIncludedBannerTextView,
  AppsIncluedBannerContainer,
  TextView,
} from './styles';
import {TextDefault} from '../../styles/UIComponents';

const AppsIncludedBanner = () => {
  return (
    <AppsIncluedBannerContainer>
      <AppsIncludedBannerTextView>
        <TextView>
          <TextDefault bold fontSize={15}>
            Apps incluídos no seu plano
          </TextDefault>
        </TextView>
        <TextView>
          <TextDefault>
            Aproveite seu acesso premium em nossos parceiros digitais para
            cuidar do seu corpo, mente e bem-estar
          </TextDefault>
        </TextView>
      </AppsIncludedBannerTextView>
    </AppsIncluedBannerContainer>
  );
};

export default AppsIncludedBanner;
