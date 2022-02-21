import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const BuzzTopicCard = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      {/* Card */}
      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/img/buzz-h1.jpg")}
            style={styles.img}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardContentTop}>
            <Text style={styles.title}>
              All The News You Need From The World Of Tollywood
            </Text>
            <MaterialIcons name="save-alt" size={22} color="grey" />
          </View>
          <View style={styles.cardContentBottom}>
            <View style={styles.authorConatiner}>
              <View style={styles.avatorConatiner}>
                <Image
                  source={require("../assets/img/buzz-h1.jpg")}
                  style={styles.avator}
                />
              </View>
              <Text style={styles.smallText}> 5 Days ago</Text>
            </View>
            <View style={styles.socialIconsContainer}>
              <View style={styles.likesContainer}>
                <AntDesign name="like2" size={22} color="grey" />
                <Text>10</Text>
              </View>
              <Entypo name="share" size={22} color="grey" />
            </View>
          </View>
        </View>
      </View>
      {/* Card */}
      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/img/buzz-h2.jpg")}
            style={styles.img}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardContentTop}>
            <Text style={styles.title}>
              All The News You Need From The World Of Tollywood
            </Text>
            <MaterialIcons name="save-alt" size={22} color="grey" />
          </View>
          <View style={styles.cardContentBottom}>
            <View style={styles.authorConatiner}>
              <View style={styles.avatorConatiner}>
                <Image
                  source={require("../assets/img/buzz-h3.jpg")}
                  style={styles.avator}
                />
              </View>
              <Text style={styles.smallText}> 5 Days ago</Text>
            </View>
            <View style={styles.socialIconsContainer}>
              <View style={styles.likesContainer}>
                <AntDesign name="like2" size={22} color="grey" />
                <Text>10</Text>
              </View>
              <Entypo name="share" size={22} color="grey" />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/img/buzz-h4.jpg")}
            style={styles.img}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardContentTop}>
            <Text style={styles.title}>
              All The News You Need From The World Of Tollywood
            </Text>
            <MaterialIcons name="save-alt" size={22} color="grey" />
          </View>
          <View style={styles.cardContentBottom}>
            <View style={styles.authorConatiner}>
              <View style={styles.avatorConatiner}>
                <Image
                  source={require("../assets/img/buzz-h2.jpg")}
                  style={styles.avator}
                />
              </View>
              <Text style={styles.smallText}> 5 Days ago</Text>
            </View>
            <View style={styles.socialIconsContainer}>
              <View style={styles.likesContainer}>
                <AntDesign name="like2" size={22} color="grey" />
                <Text>10</Text>
              </View>
              <Entypo name="share" size={22} color="grey" />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/img/buzz-h3.jpg")}
            style={styles.img}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardContentTop}>
            <Text style={styles.title}>
              All The News You Need From The World Of Tollywood
            </Text>
            <MaterialIcons name="save-alt" size={22} color="grey" />
          </View>
          <View style={styles.cardContentBottom}>
            <View style={styles.authorConatiner}>
              <View style={styles.avatorConatiner}>
                <Image
                  source={require("../assets/img/buzz-h5.jpg")}
                  style={styles.avator}
                />
              </View>
              <Text style={styles.smallText}> 5 Days ago</Text>
            </View>
            <View style={styles.socialIconsContainer}>
              <View style={styles.likesContainer}>
                <AntDesign name="like2" size={22} color="grey" />
                <Text>10</Text>
              </View>
              <Entypo name="share" size={22} color="grey" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/img/buzz-h5.jpg")}
            style={styles.img}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardContentTop}>
            <Text style={styles.title}>
              All The News You Need From The World Of Tollywood
            </Text>
            <MaterialIcons name="save-alt" size={22} color="grey" />
          </View>
          <View style={styles.cardContentBottom}>
            <View style={styles.authorConatiner}>
              <View style={styles.avatorConatiner}>
                <Image
                  source={require("../assets/img/buzz-h1.jpg")}
                  style={styles.avator}
                />
              </View>
              <Text style={styles.smallText}> 5 Days ago</Text>
            </View>
            <View style={styles.socialIconsContainer}>
              <View style={styles.likesContainer}>
                <AntDesign name="like2" size={22} color="grey" />
                <Text>10</Text>
              </View>
              <Entypo name="share" size={22} color="grey" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  imgContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  cardContent: {
    flex: 3,
  },
  cardContentTop: {
    flexDirection: "row",
    marginBottom: 20,
  },
  title: {
    paddingHorizontal:5,
    fontSize: 15,
    fontWeight: "bold",
  },
  cardContentBottom: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authorConatiner: {
    flexDirection: "row",
    alignItems: "center",
  },
  smallText: {
    fontSize: 11,
    paddingHorizontal: 8,
  },
  avatorConatiner: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  avator: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  socialIconsContainer: {
    flexDirection: "row",
  },
  likesContainer: {
    flexDirection: "row",
    marginRight: 20,
  },
});

export default BuzzTopicCard;
