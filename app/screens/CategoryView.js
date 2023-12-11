import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import file from '../../assets/dummy.json'
import NewsStrip from '../components/NewsStrip'

const CategoryView = ({ navigation, route }) => {

    const cat = route.params.page

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: cat
      })
    })

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >
      <FlatList
      data={file}
      keyExtractor={poke => poke.id} 
      renderItem={({ item }) => (
        <NewsStrip 
        image={item.image}
        source={item.source}
        text={item.preview}
        time={item.time}
        tap={() => navigation.navigate('article', item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ <View style={{ height: 10 }} />}
      />
    </View>
  )
}

export default CategoryView

const styles = StyleSheet.create({})