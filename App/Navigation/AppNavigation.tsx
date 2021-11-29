import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, PollScreen, blankScreen } from '../../App/Screens'
import { colors } from '../Theme'
import Icon5 from 'react-native-vector-icons/dist/FontAwesome5'
import routes from './Routes'

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()

const MainTabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.lightGray
      },
      tabBarActiveTintColor: colors.orca,
      tabBarInactiveTintColor: colors.grey
    }}
  >
    <BottomTab.Screen
      name={routes.HomeScreen}
      component={HomeScreen}
      options={{
        title: 'Today',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Icon5 name="sun" size={size} color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={routes.ExploreScreen}
      component={blankScreen}
      options={{
        title: 'Explore',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Icon5 name="search" size={size} color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={routes.FavouritesScreen}
      component={blankScreen}
      options={{
        title: 'Favourites',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Icon5 name="heart" size={size} color={color} />
        )
      }}
    />
    <BottomTab.Screen
      name={routes.ConnectScreen}
      component={blankScreen}
      options={{
        title: 'Connect',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <Icon5 name="comment" size={size} color={color} />
        )
      }}
    />
  </BottomTab.Navigator>
)

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.TabNav}
      component={MainTabNavigator}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name={routes.PollScreen}
      component={PollScreen}
      options={{
        headerShown: false,
        presentation: 'modal',
        headerMode: 'screen'
      }}
    />
  </Stack.Navigator>
)

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default AppNavigation
