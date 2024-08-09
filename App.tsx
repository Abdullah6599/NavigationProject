import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Welcome from './src/screens/Welcome'
import RegisterScreen from './src/screens/RegisterScreen'
import Login from './src/screens/Login'
const App = () => {
  const Bottom=createBottomTabNavigator()
  return (
  <NavigationContainer >
    <Bottom.Navigator>
        <Bottom.Screen name='Signup' component={RegisterScreen}/>
        <Bottom.Screen name='screen' component={Login}/>
        <Bottom.Screen name='Welcome' component={Welcome}/>
    </Bottom.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})



















