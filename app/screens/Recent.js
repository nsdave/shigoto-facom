import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import NewsCard from '../components/NewsCard'
import NewsStrip from '../components/NewsStrip'
import * as Network from 'expo-network'
import NoConnection from '../components/NoConnection'
import files from '../../assets/dummy.json'

const Recent = ({ navigation}) => {
    const [network, setNetwork] = useState(undefined)

    const getNetworkState = async () => {
        const state = await Network.getNetworkStateAsync()
        setNetwork(JSON.stringify(state.isInternetReachable))
    }

    useEffect(() => {
        getNetworkState()
    }, [])

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
                data={files}
                keyExtractor={poke => poke.id}
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
                ListHeaderComponent={<NewsCard />}
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