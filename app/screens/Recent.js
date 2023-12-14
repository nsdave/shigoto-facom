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
    const [change, setChange] = useState(false)

    const getNetworkState = async () => {
        const state = await Network.getNetworkStateAsync()
        setNetwork(JSON.stringify(state.isInternetReachable))
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
        let all = data?.filter(z => z.id != 1)

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
                inverted
                renderItem={({ item }) => (
                    <NewsStrip 
                    image={item.image}
                    text={item.preview}
                    time={item.time}
                    source={item.source}
                    tap={() => navigation.navigate('article', item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={<View style={{ height: 75}} />}
                onRefresh={() => fetchData()}
                refreshing={change}
                ListEmptyComponent={<ActivityIndicator size={'large'} color={'black'} />}
                ListFooterComponent={<NewsCard data={jead()} />}
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