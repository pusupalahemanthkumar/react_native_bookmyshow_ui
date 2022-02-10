import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, useWindowDimensions } from 'react-native';

const AdImageHome = (props) => {
    const { width } = useWindowDimensions();
    return (
        <View style={
            {
                ...styles.container,
                width: width
            }

        }>
            <Image source={require('../assets/img/ad-img.jpg')}
                style={
                    {
                        ...styles.img,
                        width: width
                    }
                }
                resizeMode='stretch'
            />
        </View>
    );

}



const styles = StyleSheet.create({
    container: {
        height: 120,
        maxHeight: 120,
    },
    img: {
        width: '100%',
        height: '100%',
    }


});

export default AdImageHome;