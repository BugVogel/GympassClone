import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CarouselItem from './CarouselItem';
import {CarouselContainer, CarouselGroupCheckBoxView} from './styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CarouselGroupCheckBox from './CaroulselGroupCheckBox';

export default props => {
  const width = Dimensions.get('window').width;
  const [carouselItem, setCarouselItem] = useState(0);
  const {data} = props;

  return (
    <CarouselContainer>
      <GestureHandlerRootView>
        <Carousel
          // loop
          // mode="parallax"
          // pagingEnabled={false}
          // enabled={true}
          width={width}
          height={width / 2}
          // autoPlay={true}
          pagingEnabled={false}
          data={data}
          // scrollAnimationDuration={1000}
          onSnapToItem={index => setCarouselItem(index)}
          renderItem={item => {
            // console.warn(Object.keys(item));
            const Component = props?.component
              ? item?.item?.component
              : () => <></>;

            return props?.component ? (
              <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
                <Component />
              </View>
            ) : (
              <CarouselItem key={item.index} uri={item.item.uri} /> //iMAGE
            );
          }}
        />
      </GestureHandlerRootView>
      {!props.withoutChecks && (
        <CarouselGroupCheckBoxView>
          <CarouselGroupCheckBox
            size={data.length}
            carouselItem={carouselItem}
            setCarouselItem={setCarouselItem}
          />
        </CarouselGroupCheckBoxView>
      )}
    </CarouselContainer>
  );
};
