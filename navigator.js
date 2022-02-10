// Importing required packages and files here
import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

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
                        <Icon
                            name="md-home"
                            color={tintColor}
                            size={24}
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
                        <Icon
                            name="ios-flash"
                            color={tintColor}
                            size={24}
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

    }

);

export default createAppContainer(bottomNavBar);