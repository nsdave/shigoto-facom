import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigationTabTree from './NavigationTabTree'
import ArticleView from '../screens/ArticleView'
import CategoryView from '../screens/CategoryView'

const Stack = createNativeStackNavigator()

const NavigationStackTree = () => (
    <Stack.Navigator
    screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name='main' component={NavigationTabTree} />
        <Stack.Screen 
        name='article' 
        component={ArticleView}  
        />
        <Stack.Screen 
        name='catview'
        component={CategoryView}
        />
    </Stack.Navigator>
)

export default NavigationStackTree

const styles = StyleSheet.create({})