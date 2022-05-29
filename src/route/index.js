import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {HomePage} from '../view'

const Stack = createNativeStackNavigator()

const RouteStack = () => {
    return(
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='Welcome' component={HomePage} />
            <Stack.Screen name='Home' component={HomePage} />
        </Stack.Navigator>
    )
}

const Route = () => {
    return(
        <NavigationContainer>
            <RouteStack />
        </NavigationContainer>
    )
}

export default Route