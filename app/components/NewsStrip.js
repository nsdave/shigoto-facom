import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const NewsStrip = ({ tap, image, text, time, source }) => {
  return (
    <TouchableOpacity 
    style={styles.body} 
    onPress={tap}
    activeOpacity={0.8}
    >
      <View style={styles.top} >
        <View style={{ width: '70%' }} >
            <Text style={styles.toptxt2} >{source}</Text>
            <Text style={styles.toptxt} >{text}</Text>
        </View>
        <Image 
        style={styles.img}
        source={{ uri: image }} 
        />
      </View>

      <View style={styles.bottom} >
        <Text style={styles.bottomtxt} >{dayjs(time).fromNow()}</Text>
        <SimpleLineIcons name='options-vertical' size={14} color={'gray'} />
      </View>
    </TouchableOpacity>
  )
}

export default NewsStrip

const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        alignSelf: 'center',
        borderBottomWidth:  StyleSheet.hairlineWidth,
        paddingBottom: 5,
        width: '92%',
        marginBottom: 20,
        borderColor: 'lightgray',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    toptxt2: {
        color: '#1E90FF'
    },
    toptxt: {
        fontSize: 16,
        fontWeight: '500',
    },
    img: {
        height: 75,
        width: 75,
        borderRadius: 12,
        marginTop: 2
    },
    bottom: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomtxt: {
        fontSize: 13,
        color: 'gray'
    }
})