import { StyleSheet, SafeAreaView,ScrollView, View, Dimensions} from 'react-native';
import CarouselCards from '../Components/CarouselCard/CarouselCards'
import Cards from '../Components/Card/Cards'
import PopularShows from '../Components/Card/PopularShows'
import DisneyCards from '../Components/Card/DisneyCard'
export default function HomeScreen() {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    <CarouselCards />
      <Cards style={styles.image}/>
      <PopularShows  style={styles.image}/>
      <DisneyCards  style={styles.image}/>
      <Cards style={styles.image}/>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: 'black',
  },

  image: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    }
});