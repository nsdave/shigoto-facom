import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const SIZE = Dimensions.get('window').width

const ArticleView = ({ navigation, route }) => {
  const [like, setLike] = useState(false)

  const cat = route.params


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '',
      headerRight: () => (
        <>
        {
          like
          ?
          <AntDesign 
          name='heart'
          color={'#1E90FF'}
          size={22}
          style={{ marginRight: 7 }}
          onPress={() => setLike((prev) => !prev)}
          />
          :
          <AntDesign 
          name='hearto'
          color={'black'}
          size={22}
          style={{ marginRight: 7 }}
          onPress={() => setLike((prev) => !prev)}
          />
        }
        </>
      )
    })
  })

  return (
    <ScrollView
    style={{ flex: 1, backgroundColor: 'white' }}
    showsVerticalScrollIndicator={false}
    >
      <View 
      style={styles.top}
      >
        <Text style={styles.tit} >{cat.preview}</Text>
        <View style={styles.txtrow} >
          <Text style={styles.src} >{cat.source}</Text>
          <Text style={styles.time} >● {dayjs(cat.created_at).fromNow()}</Text>
        </View>
      </View>

      <Image 
      style={styles.img}
      source={{ uri: cat.image }}
      />

      <View style={styles.deschold} >
        <Text style={styles.desc} >{cat.body}</Text>
      </View>

    </ScrollView>
  )
}

export default ArticleView

const styles = StyleSheet.create({
  top: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 16
  },
  tit: {
    fontSize: 22,
    fontWeight: '600'
  },
  txtrow: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 7,
    gap: 6
  },
  src: {
    color: '#1E90FF',
    fontWeight: '500'
  },
  time: {
    fontSize: 13,
    color: 'gray'
  },
  img: {
    height: SIZE / 1.7, 
    width: SIZE / 1.09,
    borderRadius: 16,
    alignSelf: 'center'
  },
  deschold: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 18
  },
  desc: {
    color: 'dimgray',
    fontSize: 17,
    lineHeight: 28
  }
})