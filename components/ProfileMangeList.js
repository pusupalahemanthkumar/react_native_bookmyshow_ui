import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import DefaultStyles from "../constants/DefaultStyles";

const ProfileMangeList = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemConatiner}>
        <View style={styles.itemL}>
          {item.titleIcon}
          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontSize: 15, color: "grey" }}>{item.title}</Text>
            {item.text && (
              <Text style={{ fontSize: 12, color: "grey" }}>{item.text}</Text>
            )}
          </View>
        </View>
        <View style={styles.itemR}>{item.rightIcon}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemConatiner: {
    height: 65,
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemL: {
    flexDirection: "row",
  },
  itemR: {},
});

export default ProfileMangeList;
