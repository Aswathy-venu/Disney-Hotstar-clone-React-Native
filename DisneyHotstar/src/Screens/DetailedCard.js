import React from 'react'
import {ScrollView, View, Text, StyleSheet, Dimensions, ImageBackground, Pressable } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Cards from '../Components/Card/Cards'


export const SLIDER_WIDTH = Dimensions.get('window').width 
export const ITEM_WIDTH = SLIDER_WIDTH 

const DetailedCard = ({ route }) => {
    const { movie } = route.params;

    return (
      <ScrollView>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={{ uri: movie.posterURL }}
                    style={styles.bgimage}
                />
            </View>
            <Text style={styles.heading}>{movie.title}</Text>
            <Text style={styles.title}>2019 . 2h 14m . Malayalam . U/A 7+</Text>
            <Pressable style={styles.subscribeButton}>
                <Text style={styles.text}>&#9654;&nbsp;&nbsp;Watch Now</Text>
            </Pressable>
            <Text style={styles.h2}>Drama | Dramedy | Light-hearted | Youth Adult | Buddy</Text>
            <Text style={styles.body}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </Text>
            <View style={styles.iconContainer}>
                <View style={styles.iconButton}>
                    <MaterialCommunityIcons name="plus" size={30} color="white" />
                    <Text style={styles.iconText}>Watchlist</Text>
                </View>
                <View style={styles.iconButton}>
                    <FontAwesome name="share" size={30} color="white" />
                    <Text style={styles.iconText}>Share</Text>
                </View>
                <View style={styles.iconButton}>
                    <MaterialCommunityIcons name="download" size={30} color="white" />
                    <Text style={styles.iconText}>Downloads</Text>
                </View>
                <View style={styles.iconButton}>
                    <FontAwesome name="heart" size={30} color="white" />
                    <Text style={styles.iconText}>Rate</Text>
                </View>
            </View>
            <Cards style={styles.image}/>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderRadius: 8,
        height: '100%',
    },
   
    bgimage: {
        width: ITEM_WIDTH,
        height: 250,
    },
    heading: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        marginTop: '1%',
    },
    title: {
        color: 'grey',
        fontSize: 18,
        textAlign: 'center',
    },
    h2: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: '8%',
    },
    body: {
        color: 'grey',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    subscribeButton: {
        alignItems: 'center',
        paddingVertical: 13,
        borderRadius: 9,
        backgroundColor: 'white',
        marginTop: '7%',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        lineHeight: 19,
        letterSpacing: 0.30,
        color: 'black',
        fontWeight: 'bold'
    },
    iconContainer: {
        flexDirection: 'row',
       
    },
    iconButton: {
        alignItems: 'center',
        marginLeft:'5%',
        marginTop: '10%'
    },
    iconText: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
        marginBottom: '90%'
    },
})

export default DetailedCard
