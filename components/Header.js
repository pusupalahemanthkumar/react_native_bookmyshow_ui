import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import DefaultStyles from "../constants/DefaultStyles";
import Colors from "../constants/Colors";

const renderHomeScreenIcons = () => {
    return (
        <>
            <View style={styles.headerIcons}>
                <Icon name="ios-search-outline" size={20} style={styles.icon} />
            </View>
            <View style={styles.headerIcons}>
                <Icon name="ios-notifications-outline" size={20} style={styles.icon} />
            </View>
            <View style={styles.headerIcons}>
                <Ionicons name="qr-code-outline" size={20} style={styles.icon} />
            </View>

        </>

    );
}

const renderProfileScreenIcons = () => {
    return (
        <>
            <View style={styles.headerIcons}>
                <EvilIcons name="user" size={40} style={styles.icon} />
            </View>

        </>

    )
}

const Header = (props) => {
    let IconsUI = null;
    if (props.screen === 'home') {
        IconsUI = renderHomeScreenIcons();
    } else if (props.screen === 'profile') {
        IconsUI = renderProfileScreenIcons();
    }
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <Text
                    style={
                        {
                            ...styles.headerTitle,
                            ...DefaultStyles.textWhite,
                        }
                    }
                >
                    {props.title}
                </Text>
                {
                    props.titleText && (
                        <Text
                            style={
                                {
                                    ...styles.headerLocation,
                                    ...DefaultStyles.textWhite
                                }
                            }
                        >
                            {props.titleText}
                        </Text>
                    )
                }

            </View>
            <View style={styles.headerRight}>{IconsUI}</View>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: Colors.primaryColor2,
        padding: 20,
        paddingTop: 40,
        height: StatusBar.currentHeight + 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {

    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '700'
    },
    headerLocation: {
        fontSize: 12,

    },
    headerRight: {
        flexDirection: 'row',
    },
    headerIcons: {
    },
    icon: {
        color: Colors.textColor1,
        marginHorizontal: 10,
    }
});

export default Header;