import React from "react";
import { View } from "react-native";
import { Zocial, FontAwesome } from "@expo/vector-icons";
import { secondLayer } from "./officialColors";

export const EmailIcon = () => (
  <View>
    <Zocial name="email" color={secondLayer} size={22} />
  </View>
);
export const PasswordIcon = () => (
  <View>
    <FontAwesome name="lock" size={27} color={secondLayer} />
  </View>
);
