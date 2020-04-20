import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import { secondLayer } from "../global/officialColors";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import Touchable from "react-native-platform-touchable";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.LoadFont = async () =>
      await loadAsync({
        Lobster: require("../assets/Lobster.ttf"),
      });
    this.state = {
      notifAvailable: false,
    };
  }

  render() {
    const Notif = () => {
      return (
        <View style={styles.notifCard}>
          <Text style={{ textAlign: "center" }}>No Notif Availaible</Text>
          <View
            style={{
              height: 20,
              width: 20,
              position: "absolute",
              top: -9,
              right: 10,
              transform: [{ rotate: "47deg" }],
              backgroundColor: "#fff",
            }}
          ></View>
        </View>
      );
    };

    return (
      <View>
        <View style={styles.header}>
          <View style={styles.topContainer}>
            <Touchable
              style={styles.burger}
              onPress={() => this.props.openTheDrawer()}
            >
              <Feather name="bar-chart-2" size={35} color="#fff" />
            </Touchable>
            <Text style={{ ...styles.brand, fontFamily: "Lobster" }}>
              Food Magazine
            </Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.inputContainer}>
              <Image
                source={require("../assets/search.png")}
                style={{ height: 20, width: 20 }}
              />
              <TextInput
                placeholder="e.g: Burger, Pizza ...."
                style={styles.input}
                placeholderTextColor="#757575"
              />
            </View>
            <Touchable
              style={styles.notif}
              onPress={() =>
                this.setState({ notifAvailable: !this.state.notifAvailable })
              }
            >
              <FontAwesome5 name="bell" size={30} color="#fff" />
            </Touchable>
          </View>
        </View>
        {this.state.notifAvailable && <Notif />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: HEIGHT * 0.22,
    width: WIDTH,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: secondLayer,
  },
  topContainer: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  burger: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ rotate: "270deg" }],
  },
  brand: {
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 10,
  },
  bottomContainer: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -10,
  },
  inputContainer: {
    height: 45,
    width: 290,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginLeft: 20,
  },
  input: {
    textAlign: "left",
    height: 25,
    width: 280,
    marginLeft: 20,
    fontSize: 15,
  },
  notif: {
    height: 38,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  notifCard: {
    minHeight: 50,
    width: 250,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    position: "absolute",
    top: HEIGHT * 0.23 - 10,
    right: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
