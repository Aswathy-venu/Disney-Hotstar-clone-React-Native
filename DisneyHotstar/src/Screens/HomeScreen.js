import { StyleSheet, SafeAreaView} from 'react-native';
import CarouselCards from '../Components/CarouselCard/CarouselCards'



export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <CarouselCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});