import React from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ScrollView,
    useWindowDimensions
} from 'react-native';

const entertainmentData = [
    [
        {
            id: '1',
            title: 'Khiladi',
            url: require('../assets/img/entertainment1.jpg')
        },
        {
            id: '2',
            title: 'DJ Tillu',
            url: require('../assets/img/entertainment2.jpg')
        },

    ],
    [
        {
            id: '3',
            title: 'FIR',
            url: require('../assets/img/entertainment3.jpg')
        },
        {
            id: '4',
            title: 'Khiladi',
            url: require('../assets/img/entertainment4.jpg')
        },

    ],
    [
        {
            id: '5',
            title: 'Badhaai Do',
            url: require('../assets/img/entertainment5.jpg')
        },
        {
            id: '6',
            title: 'Bagaraju',
            url: require('../assets/img/entertainment6.jpg')
        },

    ],
    [
        {
            id: '7',
            title: 'Death On The Nile',
            url: require('../assets/img/entertainment7.jpg')
        },
        {
            id: '8',
            title: 'Death On The Nile',
            url: require('../assets/img/entertainment8.jpg')
        },

    ]


]

const EntertainmentList = (props) => {
    const { width } = useWindowDimensions();

    const renderEntertainmentList = ({ item }) => {
        return (
            <View style={styles.entertainmentContainer}>
                <View style={styles.entertainmentItem}>
                    {/* <Text>{item[0].title}</Text> */}
                    <Image
                        source={item[0].url}
                        style={styles.image}
                    />


                </View>
                <View style={styles.entertainmentItem} >
                    {/* <Text>{item[1].title}</Text> */}
                    <Image
                        source={item[1].url}
                        style={styles.image}
                    />

                </View>

            </View>
        )
    }

    return (
        <FlatList
            style={{ paddingHorizontal: 2, paddingVertical: 10 }}
            data={entertainmentData}
            renderItem={renderEntertainmentList}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item[0].id}

        />
    );

}



const styles = StyleSheet.create({
    entertainmentContainer: {
        height: 350,
        maxHeight: 350,
        justifyContent: 'space-between',
        // alignItems: 'stretch',
    },
    entertainmentItem: {
        flex: 1,
        width: 150,
        margin: 10,
        borderRadius:17,
        elevation:10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderRadius:10,

    }

});

export default EntertainmentList;