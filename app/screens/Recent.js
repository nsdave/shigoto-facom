import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import NewsCard from '../components/NewsCard'
import NewsStrip from '../components/NewsStrip'
import * as Network from 'expo-network'
import NoConnection from '../components/NoConnection'
import files from '../../assets/dummy.json'
import { supabase } from '../utils/supabase'

const Recent = ({ navigation}) => {
    const [network, setNetwork] = useState(undefined)
    const [data, setData] = useState(null)
    const [change, setChange] = useState(true)

    const getNetworkState = async () => {
        const state = await Network.getNetworkStateAsync()
        setNetwork(JSON.stringify(state.isConnected))
    }

    useEffect(() => {
        getNetworkState()
    }, [])

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
        setChange(false)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    useEffect(() => {
        fetchData();
      }, []);

    if(network == undefined){
        return (
            <SafeAreaView 
            style={{ flex: 1, backgroundColor: 'white' }} 
            >
                <ActivityIndicator 
                size={'large'} 
                color={'black'} 
                style={{ marginTop: 30 }}
                />
            </SafeAreaView>

        )
    }

    const jead = () => {
        let palm = data?.find(pro => pro.id === 1)

        return palm
    }

    function line(){
        let all = data?.filter(z => z.id != 1).reverse()

        return all
    }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} >
        {
            network
            ?
            <View>
                <SearchBar
                text={'Faculty News'} 
                />
                <FlatList 
                data={line()}
                keyExtractor={poke => poke.id}
                renderItem={({ item }) => (
                    <NewsStrip 
                    image={item.image}
                    text={item.preview}
                    time={item.created_at}
                    source={item.source}
                    tap={() => navigation.navigate('article', item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<NewsCard data={jead()} />}
                onRefresh={() => fetchData()}
                refreshing={change}
                ListFooterComponent={<View style={{ height: 75}} />}
                />
            </View>
            :
            <NoConnection 
            tap={() => setNetwork((prev) => !prev)}
            />
        }
    </SafeAreaView>
  )
}

export default Recent

const styles = StyleSheet.create({

})