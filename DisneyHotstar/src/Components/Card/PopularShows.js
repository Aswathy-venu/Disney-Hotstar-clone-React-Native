import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView,Pressable} from 'react-native';
import {popularData} from '../Card/Api';
import { useNavigation } from '@react-navigation/native';

const PopularView = () => {
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        popularData().then((result) => setMovies(result));
    }, []);

    return (
        <View style={styles.container}>
        <Text style={styles.body}>Popular Movies</Text>
        <ScrollView horizontal={true}>
        {movies.slice(index, index + 8).map((movie, movieIndex) => (
              <Pressable
              key={movieIndex} 
              onPress={() => navigation.navigate('MovieDetails', { movie })}
              >
              <Image
                  source={{ uri: movie.posterURL }}
                  style={styles.image} 
              />
          </Pressable>
        ))}
        </ScrollView>
    </View>

    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black', 
    },
    body: {
        fontSize: 20,
        fontWeight: 'bold',
        position:'relative',
        color:'white',
        left:0,
        bottom:7,
        paddingVertical:10,
    },
    
    image: {
        width: 150,
        height: 200,
        margin: 5,
        
    },
});

export default PopularView



  