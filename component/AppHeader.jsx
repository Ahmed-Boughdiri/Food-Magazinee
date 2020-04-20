import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Touchable from "react-native-platform-touchable";
import { Feather } from "@expo/vector-icons";
import { secondLayer } from "../global/officialColors";
import { loadAsync } from "expo-font";

const WIDTH = Dimensions.get("window").width;

const AppBar = ({ name, openDrawer }) => {
  const [font, useFont] = React.useState("");
  const loadFont = async () =>
    await loadAsync({
      Lobster: require("../assets/Lobster.ttf"),
    });
  React.useEffect(() => {
    loadFont().then(() => useFont("Lobster"));
  }, []);
  return (
    <View style={styles.header}>
      <View style={{ marginTop: 20, width: WIDTH, flexDirection: "row" }}>
        <Touchable style={styles.drawer} onPress={openDrawer}>
          <Feather name="bar-chart-2" size={35} color="#fff" />
        </Touchable>
        <Text style={{ ...styles.title, fontFamily: font }}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    marginTop: 7,
    marginLeft: 10,
  },
  drawer: {
    height: 55,
    width: 55,
    backgroundColor: "transparent",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "270deg" }],
  },
  header: {
    width: WIDTH,
    paddingHorizontal: 20,
    marginTop: 0,
    height: 80,
    flexDirection: "row",
    backgroundColor: secondLayer,
    alignItems: "center",
  },
});

export default AppBar;
