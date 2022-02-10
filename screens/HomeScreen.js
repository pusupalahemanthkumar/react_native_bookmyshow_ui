import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

import Header from "../components/Header";
import Colors from "../constants/Colors";
import CategoriesListHome from "../components/CategoriesListHome";
import CarauselHome from "../components/CarauselHome";
import CustomContainerHeader from "../components/CustomContainerHeader";
import MoviesList from "../components/MoviesList"



const HomeScreen = () => {
    return (
        <ScrollView style={styles.screen}>
            <Header
                title="It All Starts Here"
                titleText="Hyderabad >"
                screen="home"
            />
            <CategoriesListHome />
            <CarauselHome />
            <CustomContainerHeader title="Recommended Movies" btnTitle={'See All >'} />
            <MoviesList />
            <StatusBar style="auto" backgroundColor={Colors.primaryColor1} />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});


export default HomeScreen;