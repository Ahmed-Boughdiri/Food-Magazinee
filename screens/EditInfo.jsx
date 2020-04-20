import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Avatar, Caption } from "react-native-paper";
import EditInfoInputs from "../component/EditInfoInputs";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class EditInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/drawer_background.jpg")}
          style={styles.profilePhoto}
        >
          <View style={styles.avatar}>
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 35 }}>
              AH
            </Text>
          </View>
          <View style={styles.userDesc}>
            <Text
              style={{
                textAlign: "left",
                color: "#000",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Ahmed Boughdiri
            </Text>
            <Caption>ahmed@gmail.com</Caption>
          </View>
        </ImageBackground>
        <EditInfoInputs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  profilePhoto: {
    width: WIDTH,
    height: HEIGHT * 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 110,
    width: 110,
    backgroundColor: "purple",
    borderRadius: 180,
    position: "absolute",
    bottom: -55,
    left: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  userDesc: {
    flexDirection: "column",
    position: "absolute",
    bottom: 5,
    left: 160,
  },
});
