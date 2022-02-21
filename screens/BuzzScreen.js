import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

import Header from "../components/Header"
import Colors from "../constants/Colors";
import BuzzHeaderScrollList from '../components/BuzzHeaderScrollList';
import BuzzTopicsList from '../components/BuzzTopicsList';
import BuzzTopicCard from '../components/BuzzTopicCard';

const BuzzScreen = () => {
    return (
        <ScrollView style={styles.screen}>
             <Header
               title="BUZZ"
               titleText="Discover what's trending in entertainment >"
               screen="buzz"
            />
            <BuzzHeaderScrollList />
            <BuzzTopicsList />
            <BuzzTopicCard />
            <StatusBar style="auto" backgroundColor={Colors.primaryColor1} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});


export default BuzzScreen;