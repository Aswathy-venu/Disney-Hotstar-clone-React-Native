import { StyleSheet, SafeAreaView, View, Dimensions} from 'react-native';
import CarouselCards from '../Components/CarouselCard/CarouselCards'
import Cards from '../Components/Card/Cards'


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <CarouselCards />
      <Cards style={styles.image}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  image: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    }
});