import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements';

import HomeScreen from '../Screens/HomeScreen';
import Search from '../Screens/Search';
import NewHot from '../Screens/New&Hot';
import Downloads from '../Screens/Downloads';
import MySpace from '../Screens/MySpace';
import DetailedCard from './DetailedCard';
import { WatchListProvider, FavoriteContext } from '../Components/Card/FavoriteContext';

const Tab = createBottomTabNavigator(); 
const Stack = createNativeStackNavigator();

function MyTabs() {
  const { numberOfFavoriteMovies } = useContext(FavoriteContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let badgeCount = 0;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Search':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'New&Hot':
              iconName = focused ? 'flame' : 'flame-outline';
              break;
            case 'Downloads':
              iconName = focused ? 'download' : 'download-outline';
              break;
            case 'MySpace':
              iconName = focused ? 'person' : 'person-outline';
              badgeCount = numberOfFavoriteMovies;
              break;
          }

          return (
            <React.Fragment>
              <Icon name={iconName} size={size} color={color} />
              {route.name === 'MySpace' && badgeCount > 0 && (
                <Badge
                  value={badgeCount}
                  status="error"
                  containerStyle={{ position: 'absolute', top: 4, right: 15 }}
                />
              )}
            </React.Fragment>
          );
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'black',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="New&Hot" component={NewHot} />
      <Tab.Screen name="Downloads" component={Downloads} />
      <Tab.Screen name="MySpace" component={MySpace} />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="movieDetails" component={DetailedCard} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <WatchListProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </WatchListProvider>
  );
}
