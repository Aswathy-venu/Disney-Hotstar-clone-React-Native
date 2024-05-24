import React from 'react'
import { View ,StyleSheet, Dimensions} from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View style={styles.container}>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}//for display the Carousel card items
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={false}
        autoplay={true} 
        autoplayDelay={1000}  
        autoplayInterval={3000}  
        sliderHeight={100}
        loop={true} 
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'white', 
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.6}
        tappableDots={true}
        containerStyle={{
          backgroundColor: 'black', 
          paddingVertical: 40,
          height:"auto"
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height:Dimensions.get('screen').height*0.49
  },
});
export default CarouselCards