import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Colors from "../constants/Colors";
import DefaultStyles from "../constants/DefaultStyles";

const CategoriesListHome = () => {
    return (
        <ScrollView
            style={{ ...styles.categoryContainer, ...DefaultStyles.bgWhite }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.categoryItem}>
                <MaterialCommunityIcons name="movie-roll" size={30} color="black" />
                <Text style={styles.categoryItemText}>Movies</Text>
            </View>
            <View style={styles.categoryItem}>
                <MaterialCommunityIcons name="movie" size={30} color="black" />
                <Text style={styles.categoryItemText}>Stream</Text>
            </View>
            <View style={styles.categoryItem}>
                <MaterialCommunityIcons name="music-note-plus" size={30} color="black" />
                <Text style={styles.categoryItemText}>Events</Text>
            </View>
            <View style={styles.categoryItem}>
                <MaterialIcons name="sports-handball" size={30} color="black" />
                <Text style={styles.categoryItemText}>Sports</Text>
            </View>
            <View style={styles.categoryItem}>
                <Feather name="play" size={30} color="black" />
                <Text style={styles.categoryItemText}>Play</Text>
            </View>
            <View style={styles.categoryItem}>
                <Feather name="activity" size={30} color="black" />
                <Text style={styles.categoryItemText}>Fun</Text>
            </View>
        </ScrollView>

    );

}


const styles = StyleSheet.create({
    categoryContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        maxHeight:100,
    },
    categoryItem: {
        marginHorizontal:20,
        width:55,
        flexDirection:'column',
        alignItems:'center'
    },
    categoryItemText:{
        fontSize:12,
        fontWeight:'100'
    }

});

export default CategoriesListHome;
