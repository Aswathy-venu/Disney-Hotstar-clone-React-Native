import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const PopularView = () => {
    return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/disneyog.webp')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/pixar.jpeg')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/marvel.webp')}
                    style={styles.image}
                />
                </View>
                <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/starwars.jpeg')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/ng.png')}
                    style={styles.image}
                />
                <Image
                    source={require('../../../assets/hotstar.png')}
                    style={styles.image}
                />
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        width: '31%',
        height: 70,
        margin: 5,
    },
});

export default PopularView;
