import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'

const Favourite = () => {
  return (
    <SafeAreaView
    style={{ flex: 1, backgroundColor: 'white' }}
    >
        <View
        style={{ 
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
         }}
        >
            <AntDesign 
            name='heart'
            size={62}
            // color={'#fd5c63'}
            color={'#1E90FF'}
            />
            <Text
            style={{
                fontSize: 14,
                fontWeight: '400',
                marginTop: 5,
                marginBottom: 10
            }}
            >Add news to your favourite</Text>
        </View>
    </SafeAreaView>
  )
}

export default Favourite

const styles = StyleSheet.create({})