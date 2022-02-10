import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import Colors from "../constants/Colors";

const CustomContainerHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <TouchableWithoutFeedback onPress={() => { }}>
                <Text style={styles.link}>{props.btnTitle}</Text>
            </TouchableWithoutFeedback>
        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:20,
    },
    title:{
       fontSize:20,
       fontWeight: '500'
    },
    link:{
        color: Colors.btnColor2
    }
});

export default CustomContainerHeader;