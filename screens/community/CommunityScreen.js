import React from "react";
import { Searchbar } from "react-native-paper";
import { View, Text, StyleSheet, Image } from "react-native";
import tailwind from "tailwind-rn";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
// import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

function CommunityScreen() {
  return (
    <SafeAreaView>
      <View
        style={[
          tailwind("mt-5 ml-5 items-center"),
          { flexDirection: "row", justifyContent: "space-between" },
        ]}
      >
        <Text style={[styles.header, tailwind("text-3xl text-left")]}>
          My Community
        </Text>
        <TouchableOpacity style={styles.questButton}>
          <Icon name="document-text-outline" type="ionicon" color="#F7F7F7" />
          <Text
            style={{
              fontSize: 8,
              fontFamily: "Poppins-Bold",
              color: "#F7F7F7",
            }}
          >
            Quests
          </Text>
        </TouchableOpacity>
      </View>
      <Searchbar
        style={tailwind("w-5/6 mx-3 mt-5")}
        inputStyle={styles.searchBar}
        placeholder="Search"
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    fontFamily: "Poppins-Normal",
  },
  header: {
    fontFamily: "Poppins-Bold",
  },
  questButton: {
    flexDirection: "column",
    height: 47,
    width: 51,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FE904B",
    right: 10,
    borderRadius: 14,
    fontSize: 20,
  },
  map: {
    marginTop: 20,
    alignSelf: "center",
    height: 600,
    width: 350,
    borderRadius: 14,
  },
});

export default CommunityScreen;
