import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons'

const SearchBar = ({ text }) => {
    const [ change, setChange ] = React.useState(false)

  return (
    <>
        {
            change
            ?
            <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.body}
            >
                <TouchableOpacity
                onPress={() => setChange(false)}
                style={{ padding: 4 }}
                >
                    <AntDesign
                    name='close' 
                    size={26} 
                    color={'black'}
                    style={{ marginRight: 6 }}
                    />
                </TouchableOpacity>
                <TextInput
                placeholder='Search'
                style={styles.input} 
                verticalAlign='middle'
                autoFocus
                cursorColor={'black'}
                />
            </Animated.View>
            :
            <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.top}
            >
                <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setChange(true)}
                >
                    <Ionicons
                    name='search' 
                    size={26} 
                    color={'black'} 
                    />
                </TouchableOpacity>

                <Text style={styles.toptxt} >{text}</Text>

                <Ionicons 
                name='person-circle' 
                size={29} 
                color={'black'} 
                />
            </Animated.View>
        }
    </>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 12.5,
        marginBottom: 20
    },
    toptxt: {
        fontSize: 20,
        fontWeight: '400'
    },
    body: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 12,
        paddingVertical: 3,
        marginHorizontal: 12,
        borderRadius: 40,
        alignItems: 'center',
        backgroundColor: '#F0F8FF' 
    },
    input: {
        fontSize: 15,
        width: '84%'
    }
})