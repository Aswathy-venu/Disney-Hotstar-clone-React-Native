import React, { useContext } from 'react';
import { View, Text, Image, Pressable, StyleSheet, FlatList } from 'react-native';
import { FavoriteContext } from '../Components/Card/FavoriteContext';
import { useNavigation } from '@react-navigation/native';

const MyFavorites = () => {
    const { favorites } = useContext(FavoriteContext);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>My Watchlist</Text>
            {favorites.length === 0 ? (
                <Text style={styles.noFavorites}>No favorite movies yet.</Text>
            ) : (
                <FlatList
                    data={favorites}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.movieCard}>
                            <Pressable
                                onPress={() => navigation.navigate('movieDetails', { movie: item })}
                            >
                                <Image source={{ uri: item.posterURL }} style={styles.image} />
                                <Text style={styles.title}>{item.title}</Text>
                            </Pressable>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: 20,
    },
    heading: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    noFavorites: {
        color: 'white',
        fontSize: 16,
    },
    movieCard: {
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        width: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        width: 140,
        height: 200,
        borderRadius: 10,
    },
    title: {
        color: 'white',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
    },
});

export default MyFavorites;
