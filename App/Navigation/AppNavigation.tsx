import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, PollScreen, blankScreen } from '../../App/Screens'
import AppNavigationStyles from './AppNavigation.styles'
import { fonts, colors } from '../Theme'
import Icon5 from 'react-native-vector-icons/dist/FontAwesome5';

const BottomTab = createBottomTabNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: colors.lightGray
          },
          tabBarActiveTintColor: colors.orca,
          tabBarInactiveTintColor: colors.grey,
        }}
      >
        <BottomTab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Today',
            tabBarIcon: ({color, size}: {color: string, size: number}) => (
              <Icon5 name="sun" size={size} color={color}/>
            )
          }}
        />
        <BottomTab.Screen
          name="ExploreScreen"
          component={blankScreen}
          options={{
            title: 'Explore',
            tabBarIcon: ({color, size}: {color: string, size: number}) => (
              <Icon5 name="search" size={size} color={color}/>
            )
          }}
        />
        <BottomTab.Screen
          name="FavouritesScreen"
          component={blankScreen}
          options={{
            title: 'Favourites',
            tabBarIcon: ({color, size}: {color: string, size: number}) => (
              <Icon5 name="heart" size={size} color={color}/>
            )
          }}
        />
        <BottomTab.Screen
          name="ConnectScreen"
          component={blankScreen}
          options={{
            title: 'Connect',
            tabBarIcon: ({color, size}: {color: string, size: number}) => (
              <Icon5 name="comment" size={size} color={color}/>
            )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
