import React from 'react'
import { View ,StyleSheet} from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View style={styles.container}>
      <Carousel
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}//for display the Carousel card items
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        autoplay={true} 
        autoplayDelay={1000}  
        autoplayInterval={3000}  
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
          marginBottom:450,
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.6}
        tappableDots={true}
        containerStyle={{
          backgroundColor: 'black', 
          paddingVertical: 10,
        
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black',
  },
});


export default CarouselCards