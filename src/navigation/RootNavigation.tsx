import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../views/Home'
import Detailed from '../views/Detailed'

const Stack = createStackNavigator()

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detailed" component={Detailed} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
