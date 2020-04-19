import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Font from "expo-font";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.loadFonts = async() => await Font.loadAsync({
      Lobster: require("../assets/Lobster.ttf"),
    });
    this.state = {
      font: ""
    }
  }

  componentWillMount(){
    this.loadFonts().then(() => this.setState({font: "Lobster"}));
  }

  render() {
    return (
      <LinearGradient colors={["#ffb75e", "#ffa726"]} style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={require("../assets/logo.png")}
            style={{ height: 200, width: 200, marginTop: 100 }}
          />
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
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("LogIn")}
          >
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
              Get Started
            </Text>
          </TouchableOpacity>
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
  },
  btn: {
    height: 63,
    width: 300,
    backgroundColor: "#ffa726",
    borderRadius: 60,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
