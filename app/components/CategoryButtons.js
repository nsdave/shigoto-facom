import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const RAW_SIZE = Dimensions.get('window').width
const SIZE = RAW_SIZE / 3.2

const CategoryButtons = ({ onPress, text, back }) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.6}
    onPress={onPress}
    style={[
        styles.bubble,
        { backgroundColor: back }
    ]} 
    >
      <Text 
      style={[
        styles.txt,
        { color: back == '#F0F8FF' ? 'black' : 'white'  }
      ]} 
      >{text}</Text>
    </TouchableOpacity>
  )
}

export default CategoryButtons

const styles = StyleSheet.create({
    bubble: {
        width: SIZE,
        height: SIZE,
        borderRadius: 90,
        borderBottomWidth: 12,
        borderColor: 'white',
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#F0F8FF'
        backgroundColor: '#1E90FF'
    },
    txt: {
        fontSize: 19,
        textAlign: 'center'
    }
})