import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import { fetchData } from '../Components/Api/Api';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {

     fetchData()
       
         .then((responseJson) => {
               setFilteredDataSource(responseJson);
               setMasterDataSource(responseJson);
              })
              .catch((error) => {
                console.error(error);
              });
     
  
 }, []);


  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
    <View style={styles.itemContainer}>
      <Pressable
        onPress={() => navigation.navigate('movieDetails', { movie: item })}
      >
      <Image
        source={{ uri: item.posterURL }} 
        style={styles.imageStyle}
      />
      </Pressable>
    </View>
  );
};


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textView}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList numColumns={3}
          style={styles.flatStyle}
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    textView: {
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    imageStyle: {
      width: 130,
      height: 200,
    },
    textInputStyle: {
      height: 45,
      borderWidth: 1,
      margin: 5,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 10,
    },
    itemContainer: {
      margin: 4,
      flexDirection:'row',
    },
    flatStyle: {
      marginTop: 10,
    },
  });
export default Search;

