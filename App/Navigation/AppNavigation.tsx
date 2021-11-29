import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import App from '../../App'

const BottomTab = createBottomTabNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="App" component={App} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
