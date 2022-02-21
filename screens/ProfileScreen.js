import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";
import Colors from "../constants/Colors";
import ProfileMangeList from "../components/ProfileMangeList";

const data = [
  {
    titleIcon: <Feather name="shopping-bag" size={24} color="grey" />,
    title: "Purchase History",
    text: "View all your bookings & purchases",
    rightIcon: <AntDesign name="lock" size={24} color="grey" />,
  },
  {
    titleIcon: <Feather name="tv" size={24} color="grey" />,
    title: "Stream Library",
    text: "Rented, Purchased and Downloaded movies",
    rightIcon: <AntDesign name="lock" size={24} color="grey" />,
  },
  {
    titleIcon: (
      <Ionicons name="chatbox-ellipses-outline" size={24} color="grey" />
    ),
    title: "Help & Support",
    text: "View commonly asked queries and chat",
    rightIcon: <AntDesign name="right" size={24} color="grey" />,
  },
  {
    titleIcon: <AntDesign name="gift" size={24} color="grey" />,
    title: "Rewards",
    text: "View your rewards & unlock new ones",
    rightIcon: <AntDesign name="right" size={24} color="grey" />,
  },
  {
    titleIcon: <Feather name="percent" size={24} color="grey" />,
    title: "Offers",
    rightIcon: <AntDesign name="right" size={24} color="grey" />,
  },
  {
    titleIcon: <Ionicons name="card-outline" size={24} color="grey" />,
    title: "Gift Cards",
    rightIcon: <AntDesign name="right" size={24} color="grey" />,
  },
  {
    titleIcon: <Ionicons name="fast-food-outline" size={24} color="grey" />,
    title: "Food & Beverages",
    rightIcon: <AntDesign name="right" size={24} color="grey" />,
  },
  {
    titleIcon: <AntDesign name="flag" size={24} color="grey" />,
    title: "List your Show",
    text: "Got an event? Partner with us",
    rightIcon: <AntDesign name="right" size={24} color="grey" />,
  },
  {
    titleIcon: <AntDesign name="setting" size={24} color="grey" />,
    title: "Account & Settings",
    text: "Location, Payments, Addresses & More",
    rightIcon: <AntDesign name="right" size={24} color="grey" />,
  },
];

const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Header title="HEY !" screen="profile" />

      <View style={styles.profileHeader}>
        <View style={styles.profileHeaderL}>
          <Image source={require("../assets/img/rewards-login.png")} />
          <Text style={styles.profileTitle}>
            Unlock special offers & great benefits
          </Text>
        </View>
        <TouchableWithoutFeedback style={styles.profileHeaderR}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Login / Register</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{elevation:30}}>
        <ScrollView style={{ marginVertical: 20 }}>
          {data.map((item, idx) => {
            return <ProfileMangeList key={idx} item={item} />;
          })}
        </ScrollView>
      </View>

      <StatusBar style="auto" backgroundColor={Colors.primaryColor1} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  profileHeader: {
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 20,
  },
  profileHeaderL: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "40%",
  },
  profileTitle: {
    marginLeft: 5,
    fontSize: 12,
  },
  profileHeaderR: {
    flex: 1,
  },
  btn: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderColor: Colors.btnColor2,
    borderWidth: 1,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 12,
    color: Colors.btnColor2,
  },
});

export default ProfileScreen;
