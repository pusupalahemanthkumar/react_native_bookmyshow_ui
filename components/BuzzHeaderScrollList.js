import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

const data = [
  {
    imageUrl: require("../assets/img/buzz-h1.jpg"),
    title: "Bappi Lahiri",
  },
  {
    imageUrl: require("../assets/img/buzz-h2.jpg"),
    title: "Bollywood 2022",
  },
  {
    imageUrl: require("../assets/img/buzz-h3.jpg"),
    title: "Disney Films",
  },
  {
    imageUrl: require("../assets/img/buzz-h4.jpg"),
    title: "Prime Movies",
  },
  {
    imageUrl: require("../assets/img/buzz-h5.jpg"),
    title: "Netfilx Movies",
  },
];
const BuzzHeaderScrollList = () => {
  return (
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item, idx) => {
        return (
          <View  key={idx} style={styles.itemContainer}>
            <View style={styles.imgContainer}>
              <Image source={item.imageUrl} style={styles.img} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    height: 130,
    maxHeight: 130,   
  },
  itemContainer:{
     marginLeft:15,
     alignItems:'center',
  },
  imgContainer: {
    width: 80,
    height: 80,
    borderRadius: 60,
    borderColor:'red',
    borderWidth:1,
    padding:3,

  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  title: {
    fontSize: 11,
    color: "grey",
  },
});

export default BuzzHeaderScrollList;
