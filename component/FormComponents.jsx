import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";
import { EmailIcon, PasswordIcon } from "../global/icons";
import { firstLayer } from "../global/officialColors";
import AwesomeButton from "react-native-really-awesome-button";

export const Input = ({
  icon,
  name,
  changeHandler,
  secureData,
  givenValue,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={{ height: 55, width: 55 }}>
        <Image
          source={require("../assets/input.png")}
          style={{
            height: 55,
            width: 70,
            position: "absolute",
            top: 0,
            left: -2,
            bottom: 0,
          }}
        />
        <View
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon === "email" ? <EmailIcon /> : <PasswordIcon />}
        </View>
      </View>
      <TextInput
        placeholder={name}
        style={styles.input}
        placeholderTextColor="#757575"
        secureTextEntry={secureData}
        onChangeText={changeHandler}
        value={givenValue}
      />
    </View>
  );
};

export const Btn = ({ name, onPressEvent }) => {
  return (
    <AwesomeButton
      progress
      onPress={onPressEvent}
      activityColor={firstLayer}
      backgroundDarker="transparent"
      backgroundShadow="transparent"
      backgroundProgress="#fff"
      borderColor="transparent"
      borderRadius={100}
      borderWidth={0}
    >
      <View style={styles.btn}>
        <Text style={{ textAlign: "center", color: firstLayer, fontSize: 17 }}>
          {name}
        </Text>
      </View>
    </AwesomeButton>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 55,
    width: 300,
    backgroundColor: "rgba(255,255,255,0.45)",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  input: {
    height: 30,
    width: 250,
    marginLeft: 30,
    marginTop: 5,
    fontSize: 15,
  },
  btn: {
    height: 55,
    width: 300,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});
