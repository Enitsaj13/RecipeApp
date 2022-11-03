/* <-- dependencies --> */
import 'react-native-gesture-handler'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IoIcon from 'react-native-vector-icons/Ionicons'
import UserIcon from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/* <-- screens --> */
import HomeScreen from 'screens/HomeScreen'
import FavoriteScreen from 'screens/FavoriteScreen'
import MenuScreen from 'screens/MenuScreen'
import ProfileScreen from 'screens/ProfileScreen'

import Darkmode from 'components/Darkmode'

/* <-- styles --> */
import { COLORS } from 'constants'

const Tab = createBottomTabNavigator()

/* <-- bottom screens details --> */
const Screen = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    options: {
      tabBarIcon: ({ color }) => (
        <Icon name='home-filled' size={28} color={color} />
      ),
    },
  },
  {
    name: 'Ingredients',
    component: MenuScreen,
    options: {
      tabBarIcon: ({ color }) => (
        <Icon name='restaurant-menu' size={28} color={color} />
      ),
    },
  },
  {
    name: 'Add',
    component: Darkmode,
    options: {
      tabBarIcon: ({ color }) => (
        <IoIcon name='add-circle' size={24} color={color} />
      ),
    },
  },
  // {
  //   name: 'Favorite',
  //   component: FavoriteScreen,
  //   options: {
  //     tabBarIcon: ({ color }) => (
  //       <IoIcon name='heart' size={24} color={color} />
  //     ),
  //   },
  // },
  {
    name: 'Profile',
    component: ProfileScreen,
    options: {
      tabBarIcon: ({ color }) => (
        <UserIcon name='user' size={24} color={color} />
      ),
    },
  },
]

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',

        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,

        tabBarItemStyle: {
          borderRadius: 14,
          height: 40,
          marginHorizontal: 20,
          marginTop: 10,
        },

        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      {/* <-- map the screens details -->  */}
      {Screen.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Tab.Navigator>
  )
}

export default BottomNavigator
