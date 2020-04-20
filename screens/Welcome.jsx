import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { firstLayer, secondLayer } from "../global/officialColors";
import AwesomeButton from "react-native-really-awesome-button";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.loadFonts = async () =>
      await Font.loadAsync({
        Lobster: require("../assets/Lobster.ttf"),
      });
    this.state = {
      font: "",
    };
  }

  componentWillMount() {
    this.loadFonts().then(() => this.setState({ font: "Lobster" }));
  }

  render() {
    return (
      <LinearGradient
        colors={[firstLayer, secondLayer]}
        style={styles.container}
      >
        <View style={styles.topContainer}>
          <View style={styles.logo}>
            <Ionicons name="ios-restaurant" size={100} color="#ff5722" />
          </View>
          <Text style={{ ...styles.brand, fontFamily: this.state.font }}>
            Food Magazine
          </Text>
        </View>
        <ImageBackground
          source={require("../assets/bg.png")}
          style={styles.bottomContainer}
        >
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>
            Food Magazine The Best Place For Finding Recipes.
          </Text>
          <AwesomeButton
            onPress={() => this.props.navigation.navigate("LogIn")}
            activityColor={firstLayer}
            backgroundDarker="transparent"
            backgroundShadow="transparent"
            backgroundProgress="#fff"
            borderColor="transparent"
            borderRadius={100}
            borderWidth={0}
          >
            <View style={styles.btn}>
              <Text
                style={{ textAlign: "center", color: "#fff", fontSize: 18 }}
              >
                Get Started
              </Text>
            </View>
          </AwesomeButton>
        </ImageBackground>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    height: HEIGHT * 0.4,
    width: WIDTH,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  brand: {
    textAlign: "center",
    fontSize: 40,
    color: "#fff",
    marginTop: 15,
  },
  bottomContainer: {
    height: HEIGHT * 0.5,
    width: WIDTH,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "#424242",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 15,
  },
  subtitle: {
    textAlign: "center",
    color: "#616161",
    marginTop: 15,
    width: 300,
    fontSize: 18,
    marginBottom: 20,
  },
  btn: {
    height: 65,
    width: 300,
    backgroundColor: secondLayer,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 170,
    width: 170,
    marginTop: 100,
    backgroundColor: "#fff",
    borderRadius: 100,
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
