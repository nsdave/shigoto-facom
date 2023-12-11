import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const NoConnection = ({ tap }) => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    }} >
        <View style={{ alignItems: 'center' }} >
            <MaterialIcons name='wifi-off' size={55} />
            <Text style={{ fontSize: 15 }} >No internet connection</Text>
            <Text style={{ fontSize: 15, marginTop: 2 }} >Would you like to continue offline</Text>
        </View>
      <TouchableOpacity 
      activeOpacity={0.5}
      style={styles.btn} 
      onPress={tap}
      >
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NoConnection

const styles = StyleSheet.create({
    btn: {
        borderRadius: 40,
        paddingHorizontal: 19,
        paddingVertical: 8,
        backgroundColor: '#F0F8FF'
    }
})