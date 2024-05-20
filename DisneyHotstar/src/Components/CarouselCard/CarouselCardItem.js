import React from 'react'
import { View, Text, StyleSheet, Dimensions,ImageBackground,Image,Pressable } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = SLIDER_WIDTH 
export const SLIDER_HEIGHT = Dimensions.get('window').height 
export const ITEM_HEIGHT = SLIDER_HEIGHT 

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: item.bgImgUrl }}
          style={styles.bgimage}
        />
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
        />
      </View>
      <Text style={styles.body}>{item.body}</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.subscribeButton}>
          <Text style={styles.text}>&#9654;&nbsp;&nbsp;Subscribe To Watch</Text>
        </Pressable>
        <Pressable style={styles.wathchListButton}>
          <Text style={styles.text}>&#43;</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: 8,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  imageContainer: {
    position: 'relative',
  },
  bgimage: {
    width: ITEM_WIDTH,
    height: 300,
  },
  image: { 
    position: 'absolute',
    left: 0,
    right: 0,
    height:80, 
    marginTop:230,
    resizeMode: 'contain',
  },
  body: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop:30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  },
  subscribeButton: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'rgba(250, 247, 251, 0.1)',
    borderRadius:9,
    width: 200,
  },
  text: {
    fontSize: 15,
    lineHeight: 19,
    letterSpacing: 0.30,
    color: 'white',
  },
  wathchListButton: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'rgba(250, 247, 251, 0.1)',
    borderRadius:9,
    width: 60,
    marginLeft:7,
  },
})

export default CarouselCardItem