import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import file from '../../assets/dummy.json'
import NewsStrip from '../components/NewsStrip'
import { supabase } from '../utils/supabase'

const CategoryView = ({ navigation, route }) => {
  const [data, setData] = useState([])

    const mouse = route.params.page
    const cat = mouse.toLowerCase()

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data: news, error } = await supabase
            .from('news')
            .select('*');
          
          if (error) {
            console.error(error);
            return;
          }
  
          setData(news);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };

        fetchData();
      }, []);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: cat
      })
    })

    const tom = data?.filter(poke => poke.source.toLowerCase() == cat) 

    function Empty() {
      return (
        <View style={{
          flex: 1, alignItems: 'center',
          justifyContent: 'center'
        }} >
          <Text style={{ marginTop: '40%' }} >No available news</Text>
        </View>
      )
    }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >
      <FlatList
      data={tom}
      keyExtractor={poke => poke.id} 
      renderItem={({ item }) => (
        <NewsStrip 
        image={item.image}
        source={item.source}
        text={item.preview}
        time={item.created_at}
        tap={() => navigation.navigate('article', item)}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ <View style={{ height: 10 }} />}
      ListEmptyComponent={<Empty />}
      />
    </View>
  )
}

export default CategoryView

const styles = StyleSheet.create({})