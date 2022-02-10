import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const moviesData = [
    {
        id: '1',
        title: 'Khiladi',
        url: require('../assets/img/movie-1.jpg')
    },
    {
        id: '2',
        title: 'DJ Tillu',
        url: require('../assets/img/movie-2.jpg')
    },
    {
        id: '3',
        title: 'FIR',
        url: require('../assets/img/movie-3.jpg')
    },
    {
        id: '4',
        title: 'Khiladi',
        url: require('../assets/img/movie-4.jpg')
    },
    {
        id: '5',
        title: 'Badhaai Do',
        url: require('../assets/img/movie-5.jpg')
    },
    {
        id: '6',
        title: 'Bagaraju',
        url: require('../assets/img/movie-6.jpg')
    },
    {
        id: '7',
        title: 'Death On The Nile',
        url: require('../assets/img/movie-7.jpg')
    },
]

const MoviesList = (props) => {

    const renderMoviesList = ({ item }) => {
        return (
            <View style={styles.movieContainer} >
                <View style={styles.movieImageContainer}>
                    <Image
                        source={item.url}
                        style={styles.image}
                    />

                </View>
                <Text style={styles.title}>{item.title}</Text>
            </View>

        )

    }

    return (
        <FlatList
            style={{ 
                width: '100%', 
                maxHeight: 500,
            }}
            data={moviesData}
            renderItem={renderMoviesList}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
        />
    )

}


const styles = StyleSheet.create({
    movieContainer: {
        width: 220,
        height: 380,
        maxHeight:380,
        marginHorizontal:10,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
    },
    movieImageContainer: {
        width: 220,
        height: 360,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius:10,
    },
    title:{
        fontSize:12,
    }
});

export default MoviesList;