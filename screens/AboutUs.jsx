import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { loadAsync } from "expo-font";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { firstLayer, secondLayer } from "../global/officialColors";

export default class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.loadFont = async () =>
      await loadAsync({
        Lobster: require("../assets/Lobster.ttf"),
      });
    this.state = {
      font: "",
    };
  }

  componentWillMount() {
    this.loadFont().then(() => this.setState({ font: "Lobster" }));
  }

  render() {
    return (
      <LinearGradient
        colors={[firstLayer, secondLayer]}
        style={styles.container}
      >
        <View style={styles.logo}>
          <Ionicons name="ios-restaurant" color={firstLayer} size={80} />
        </View>
        <Text style={{ ...styles.brand, fontFamily: this.state.font }}>
          Food Magazine
        </Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          explicabo reiciendis labore modi blanditiis esse eos voluptatibus
          sequi, dolore, aut expedita animi, suscipit accusantium. Sunt numquam
          assumenda esse praesentium dolore!
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate("Support")}
        >
          <Text
            style={{ textAlign: "center", color: firstLayer, fontSize: 17 }}
          >
            Contact Us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancel}
          onPress={() => this.props.navigation.goBack()}
        >
          <Entypo name="cross" size={35} color="#fff" />
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    marginTop: 15,
  },
  desc: {
    textAlign: "center",
    width: 300,
    fontSize: 15,
    color: "#fff",
    marginTop: 5,
  },
  btn: {
    height: 60,
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  cancel: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 25,
    left: 10,
  },
  logo: {
    height: 170,
    width: 170,
    backgroundColor: "#fff",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
