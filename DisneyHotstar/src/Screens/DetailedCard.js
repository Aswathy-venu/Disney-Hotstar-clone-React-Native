import React from 'react'
import { View, Text, StyleSheet, Dimensions,ImageBackground,Pressable } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = SLIDER_WIDTH 


const DetailedCard = ({route}) => {
    const { movie } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={{uri: movie.posterURL}}
                    style={styles.bgimage}
                />
            </View>
            <Pressable style={styles.subscribeButton}>
                <Text style={styles.text}>&#9654;&nbsp;&nbsp;Watch Now</Text>
            </Pressable>
            <Text style={styles.body}>Drama | Dramedy | Light-hearted | youth Adult | Buddy</Text>
            <Text style={styles.body}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: 8,
    height:400,
  },
  bgimage: {
    width: ITEM_WIDTH,
    height: 300,
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

export default DetailedCard