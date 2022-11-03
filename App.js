/* <-- dependencies --> */
import 'react-native-gesture-handler'
import React from 'react'
import Toast from 'react-native-toast-message'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/* <-- screens --> */
import LandingScreen from 'screens/LandingScreen'
import BottomNavigator from 'navigation/BottomNavigator'
import DetailsScreen from 'screens/DetailScreen'
import HomeScreen from 'screens/HomeScreen'
import CookingScreen from 'screens/CookingScreen'
import FavoriteScreen from 'screens/FavoriteScreen'
import MenuScreen from 'screens/MenuScreen'
import Settings from 'screens/Settings'

/* <-- components --> */
import FocusedStatusBar from 'components/FocusedStatusBar'

const Stack = createStackNavigator()

const App = () => {
  /* <-- fonts --> */
  const [loaded] = useFonts({
    EuclidBold: require('assets/fonts/Euclid-Circular-Bold.ttf'),
    EuclidMedium: require('assets/fonts/Euclid-Circular-Medium.ttf'),
    EuclidRegular: require('assets/fonts/Euclid-Circular-Regular.ttf'),
    EuclidLight: require('assets/fonts/Euclid-Circular-Light.ttf'),
  })

  if (!loaded) return null

  return (
    <>
      <NavigationContainer>
        <FocusedStatusBar />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='LandingScreen' component={LandingScreen} />
          <Stack.Screen name='BottomNavigator' component={BottomNavigator} />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='CookingScreen' component={CookingScreen} />
          <Stack.Screen name='FavoriteScreen' component={FavoriteScreen} />
          <Stack.Screen name='MenuScreen' component={MenuScreen} />
          <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  )
}

export default App
