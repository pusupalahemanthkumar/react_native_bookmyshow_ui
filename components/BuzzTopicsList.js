import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";

import Colors from "../constants/Colors";

const BuzzTopicsList = () => {
  return (
    <View style={styles.Container}>
      <View
        style={{
          ...styles.topicContainer,
          backgroundColor: Colors.btnColor2,
          borderColor: Colors.btnColor2,
        }}
      >
        <Text
          style={{
            ...styles.title,
            color: "#fff",
          }}
        >
          Trending
        </Text>
      </View>
      <View style={styles.topicContainer}>
        <Text style={styles.title}> Movies</Text>
      </View>
      <View style={styles.topicContainer}>
        <Text style={styles.title}>Events</Text>
      </View>
      <View style={styles.topicContainer}>
        <Text style={styles.title}>Sports</Text>
      </View>
      <View style={styles.topicContainer}>
        <Text style={styles.title}>Video</Text>
      </View>
      <View style={styles.topicContainer}>
        <Text style={styles.title}>Streaming</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  topicContainer: {
    borderColor: Colors.primaryColor1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    margin: 7,
  },
  title: {
    fontSize: 11,
    color: "grey",
  },
});

export default BuzzTopicsList;
