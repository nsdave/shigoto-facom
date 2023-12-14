import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const WIDHT = Dimensions.get('window').width

// const data = {
//     "source": "Innovation",
//     "time": "1 hour ago",
//     "image": "https://cdn.pixabay.com/photo/2023/11/14/15/46/nikon-8388022_640.jpg",
//     "preview": "Nikon is a top camera brand that has been producing cameras, lenses, and optical devices for a long time",
//     "body": "The Nikon Z 5 is a great choice if you're looking for a more affordable full-frame camera. It's one of the best entry-level full-frame cameras on the market—though its relatively low price comes with some trade-offs. Most notably, it can only shoot 4k video with a heavy crop, and its burst rate maxes out at about five fps. Still, if you're primarily interested in photography, there's much to love here. ts high-res sensor captures excellent image quality. Like the higher-end Nikon Z 6II, the ergonomics stand out, and the camera is weather-sealed. On top of that, you still get a large high-resolution EVF and IBIS to help you shoot at slower shutter speeds when shooting handheld."
// }

const NewsCard = ({ data }) => {
    const navigation = useNavigation()

    return (
    <Pressable
    style={styles.body} 
    onPress={() => navigation.navigate('article', data)}
    >
        <Image 
        style={styles.img}
        source={{ uri: data?.image }}
        />
      <Text style={styles.txt} >{data?.preview}</Text>
      <Text style={styles.txt2} >{data?.source}</Text>
      <View style={styles.bottom} >
        <Text style={styles.time} >{data?.time}</Text>
        <SimpleLineIcons 
        name='options-vertical' 
        size={16} 
        color={'gray'}
        />
      </View>
    </Pressable>
  )
}

export default NewsCard

const styles = StyleSheet.create({
    body: {
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 22,
        paddingBottom: 10,
        flexDirection: 'column',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgray'
    },
    img: {
        width: WIDHT,
        height: WIDHT / 1.5,
        alignSelf: 'center', 
        marginBottom: 7
    },
    txt: {
        fontSize: 18,
        fontWeight: '500'
    },
    txt2: {
        color: '#1E90FF',
        marginTop: 5,
        marginBottom: 0.8,
        fontSize: 15
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    time: {
        color: 'gray',
        fontSize: 14
    }
})