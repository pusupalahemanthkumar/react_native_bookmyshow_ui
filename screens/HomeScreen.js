import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from "../components/Header";
import Colors from "../constants/Colors";
import CategoriesListHome from "../components/CategoriesListHome";
import CarauselHome from "../components/CarauselHome"



const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <Header
               title="It All Starts Here"
               titleText="Hyderabad >"
               screen="home"
            />
            <CategoriesListHome />
            <CarauselHome />
            <StatusBar style="auto" backgroundColor={Colors.primaryColor1} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});


export default HomeScreen;