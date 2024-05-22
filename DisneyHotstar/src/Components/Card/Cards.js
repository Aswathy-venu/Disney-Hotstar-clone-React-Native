import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView,Pressable} from 'react-native';
import fetchData from '../Card/Api';
import { useNavigation } from '@react-navigation/native';
import DetailedCard from '../../Screens/DetailedCard';
const CardView = () => {
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        fetchData().then((result) => setMovies(result));
    }, []);

    return (
        <View style={styles.container}>
        <Text style={styles.body}>Latest Releases</Text>
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
    },
    
    image: {
        width: 150,
        height: 200,
        margin: 5,
        
    },
});

export default CardView



  