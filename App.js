/* <-- dependencies --> */
import Toast from 'react-native-toast-message'
import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { EventRegister } from 'react-native-event-listeners'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { THEME, COLORS } from 'theme'

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

/* <-- navigator --> */
const Stack = createStackNavigator()

const App = () => {
  /* <-- theme --> */
  const [themeMode, setThemeMode] = useState(false)

  useEffect(() => {
    let listener = EventRegister.addEventListener('themeChanged', (data) => {
      setThemeMode(data)
    })
    return () => {
      EventRegister.removeEventListener(listener)
    }
  }, [])

  /* <-- fonts --> */
  const [loaded] = useFonts({
    EuclidBold: require('assets/fonts/Euclid-Circular-Bold.ttf'),
    EuclidMedium: require('assets/fonts/Euclid-Circular-Medium.ttf'),
    EuclidRegular: require('assets/fonts/Euclid-Circular-Regular.ttf'),
    EuclidLight: require('assets/fonts/Euclid-Circular-Light.ttf'),
  })

  if (!loaded) return null

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      card: `${themeMode ? COLORS.dark : COLORS.white}`,
    },
  }

  return (
    <>
      <ThemeContext.Provider value={themeMode ? THEME.dark : THEME.light}>
        <NavigationContainer theme={MyTheme}>
          <FocusedStatusBar
            barStyle={themeMode ? 'light-content' : 'dark-content'}
          />
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
      </ThemeContext.Provider>
    </>
  )
}

export default App
