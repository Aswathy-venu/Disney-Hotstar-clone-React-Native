import React from 'react'
import { View, Text, StyleSheet, Dimensions,ImageBackground , Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = SLIDER_WIDTH 

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <ImageBackground
        source={{ uri: item.bgImgUrl }}
        style={styles.bgimage}
      />
      
      <Text style={styles.body}>{item.body}</Text>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 150,
  
  },
  bgimage: {
    width: ITEM_WIDTH,
    height: 450,
  },

  body: {
    color: "#222",
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
    
  }
})

export default CarouselCardItem