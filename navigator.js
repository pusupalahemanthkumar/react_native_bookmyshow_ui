// Importing required packages and files here
import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from "./screens/HomeScreen";
import BuzzScreen from "./screens/BuzzScreen";
import ProfileScreen from "./screens/ProfileScreen";

const bottomNavBar = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => {
                    return (
                        <MaterialIcons
                            name="home-filled"
                            size={24}
                            color={tintColor}
                        />
                    );

                }
            }
        },
        Buzz: {
            screen: BuzzScreen,
            navigationOptions: {
                tabBarLabel: 'Buzz',
                tabBarIcon: ({ tintColor }) => {
                    return (
                        <Ionicons
                            name="md-flashlight"
                            size={24}
                            color={tintColor}
                        />
                    );

                }
            }

        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => {
                    return (
                        <Icon
                            name="ios-person"
                            color={tintColor}
                            size={24}
                        />
                    );

                }
            }

        }

    },
    {
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                shadowOffset: {
                    width: 5,
                    height: 3,
                },
                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 10,


            }
        }
    }

);

export default createAppContainer(bottomNavBar);