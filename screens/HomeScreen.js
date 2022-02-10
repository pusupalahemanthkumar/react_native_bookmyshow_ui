import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from "../components/Header";
import Colors from "../constants/Colors";
import CategoriesListHome from "../components/CategoriesListHome";
import CarauselHome from "../components/CarauselHome";
import CustomContainerHeader from "../components/CustomContainerHeader";
import MoviesList from "../components/MoviesList";
import AdImageHome from "../components/AdImageHome";
import EntertainmentList from "../components/EntertainmentList"



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
            <AdImageHome />
            <CustomContainerHeader
                title="The Best Of Entertainment"
                titleText={'Step out or stay in, interesting experiences for everyone.'}
            />
            <EntertainmentList />
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