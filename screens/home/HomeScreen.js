import React from "react";
import {
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Searchbar, Card, Paragraph } from "react-native-paper";
import tailwind from "tailwind-rn";
import CustomCard from "../../components/CustomCard";

function HomeScreen({ navigation }) {
  return (
    <View>
      <View style={tailwind("flex items-center mt-20")}>
        <View style={tailwind("mt-5")}>
          <Text style={[styles.header, tailwind("text-4xl text-left")]}>
            Home
          </Text>
        </View>

        <Searchbar
          style={tailwind("w-5/6 mx-3 mt-5")}
          inputStyle={styles.searchBar}
          placeholder="Search"
        />
        <View style={tailwind("flex flex-row mt-12")}>
          <CustomCard
            onPress={() => navigation.push("Work Permit")}
            source={require("../assets/home/workPermit.jpg")}
            title="Apply for Work Permit"
            description="Get to know what work permit you are eligible for and start applying now"
          />
          <View style={tailwind("w-3")} />
          <CustomCard
            onPress={() => navigation.push("CurrentNews")}
            source={require("../assets/home/news.jpg")}
            title="Get current news"
            description="Keep up with current news in Singapore! Find out what happened recently"
          />
        </View>
        <View style={tailwind("flex flex-row mt-8")}>
          <CustomCard
            onPress={() => navigation.push("Get To Know Singapore")}
            source={require("../assets/home/singapore.jpg")}
            title="Get to know Singapore"
            description="Unfamiliar with Singapore? Fret now! click here to find out more."
          />
          <View style={tailwind("w-3")} />
          <CustomCard
            source={require("../assets/home/friends.jpg")}
            title="Make new friends"
            description="Click here to make friends with people who are  new to Singapore as well!"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    fontFamily: "Poppins-Normal",
  },
  header: {
    fontFamily: "Poppins-Bold",
  },
});

export default HomeScreen;
