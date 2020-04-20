import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Loading extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={["#ffb75e", "#ffa726"]}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#444" />
        <Text style={{ textAlign: "center", fontSize: 25, color: "#444" }}>
          Loading
        </Text>
      </LinearGradient>
    );
  }
}
