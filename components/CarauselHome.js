import React, {
    useState,
    useRef
} from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    useWindowDimensions,
    Image,
    Animated
} from 'react-native';

const imageData = [
    {
        id: '1',
        url: require('../assets/img/home-slider-1.jpg'),
    },
    {
        id: '2',
        url: require('../assets/img/home-slider-2.jpg'),
    },
    {
        id: '3',
        url: require('../assets/img/home-slider-3.png'),
    },
    {
        id: '4',
        url: require('../assets/img/home-slider-1.jpg'),
    },

];

const CarauselHome = (props) => {
    const { width } = useWindowDimensions();

    const rendercarauselItem = (itemData) => {
        return (
            <View style={
                {
                    ...styles.container,
                    width: width

                }
            }>
                <Image
                    source={itemData.item.url}
                    style={styles.image}
                />
            </View>

        );
    }
    return (
        <>
            <Animated.FlatList
                data={imageData}
                renderItem={rendercarauselItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
            />
        </>


    )

}


const styles = StyleSheet.create({
    container: {
        height: 200,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }


});

export default CarauselHome;