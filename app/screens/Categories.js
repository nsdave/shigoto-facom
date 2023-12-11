import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import CategoryButtons from '../components/CategoryButtons'

const cats = [
    {
        id: '1',
        name: 'Events',
        color: '#F0F8FF'
    },
    {
        id: '2',
        name: 'Sports',
        color: '#F0F8FF'
    },
    {
        id: '3',
        name: 'Innovation',
        color: '#1E90FF'
    },
    {
        id: '4',
        name: 'Academic',
        color: '#1E90FF'
    },
    {
        id: '5',
        name: 'Top news',
        color: '#F0F8FF'
    },
    {
        id: '6',
        name: 'Official',
        color: '#F0F8FF'
    },
]

const Categories = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}} >
        <SearchBar 
        text={'Category'}
        />
            <View style={styles.btnhold} >
                {
                    cats.map((item) => (
                        <CategoryButtons 
                        onPress={() => navigation.navigate('catview', { page: item.name })}
                        key={item.id}
                        text={item.name}
                        back={item.color}
                        />
                    ) )
                }
            </View>
    </SafeAreaView>
  )
}

export default Categories

const styles = StyleSheet.create({
    btnhold: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%'
    }
})