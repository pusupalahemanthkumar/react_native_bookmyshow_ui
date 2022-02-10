import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from "../components/Header"
import Colors from "../constants/Colors";

const BuzzScreen = () => {
    return (
        <View style={styles.screen}>
             <Header
               title="BUZZ"
               titleText="Discover what's trending in entertainment >"
               screen="buzz"
            />
            <StatusBar style="auto" backgroundColor={Colors.primaryColor1} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});


export default BuzzScreen;