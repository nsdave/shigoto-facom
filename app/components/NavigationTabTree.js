import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Favourite from '../screens/Favourite'
import Recent from '../screens/Recent'
import Categories from '../screens/Categories'
import Video from '../screens/Video'
import { AntDesign, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const NavigationTabTree = () => (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: { paddingBottom: 5, height: 50 },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '400' },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: '#1E90FF',
        headerShown: false
    }}
    >
        <Tab.Screen 
        name='recent' 
        component={Recent} 
        options={{
            tabBarIcon: ({ focused, color }) => (
                <>
                {
                    focused
                    ?
                    <FontAwesome5
                    name='globe' 
                    size={22} 
                    color={color} 
                    />
                    :
                    <SimpleLineIcons 
                    name='globe'
                    size={22}
                    color={color}
                    />
                }
                </>
            ),
            title: 'Recent'
        }}
        />
        <Tab.Screen 
        name='cat' 
        component={Categories} 
        options={{
            tabBarIcon: ({ focused, color }) => (
                <AntDesign
                name={ focused ? 'appstore1' : 'appstore-o' } 
                size={22} 
                color={color} 
                />
            ),
            title: 'Category'
        }}
        />
        <Tab.Screen 
        name='video' 
        component={Video} 
        options={{
            tabBarIcon: ({ focused, color }) => (
                <AntDesign 
                name={ focused ? 'play' : 'playcircleo' } 
                size={22} 
                color={color} 
                />
            ),
            title: 'Video'
        }}
        />
        <Tab.Screen 
        name='fav' 
        component={Favourite} 
        options={{
            tabBarIcon: ({ focused, color }) => (
                <AntDesign 
                name={ focused ? 'heart' :'hearto' } 
                size={24} 
                color={color} 
                />
            ),
            title: 'Favourite'
        }}
        />
    </Tab.Navigator>
)

export default NavigationTabTree

const styles = StyleSheet.create({})