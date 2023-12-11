import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import mo  from '../../assets/emptyvid.png'

const Video = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}} >
        <SearchBar 
        text={'Video'}
        />
        <View 
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }} 
        >
            <Image 
            source={mo}
            style={{ height: 100, width: 100 }}
            />
            <Text
            style={{
                marginBottom: '13%',
                marginTop: 10,
                fontWeight: '400',
                fontSize: 14
            }}
            >No available videos</Text>
        </View>
    </SafeAreaView>
  )
}

export default Video

const styles = StyleSheet.create({})