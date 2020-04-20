import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Switch,
} from "react-native";
import Touchable from "react-native-platform-touchable";

const WIDTH = Dimensions.get("window").width;

export const Switcher = () => {
  return <Switch />;
};

export const Setting = ({
  name,
  icon,
  last,
  size,
  switcher,
  touchable,
  eventFn,
  onPressEvent,
}) => {
  const Child = () => (
    <View style={styles.setting}>
      <Image source={icon} style={{ height: size, width: size }} />
      <Text style={styles.settingName}>{name}</Text>
      <View style={styles.lastSetting}>
        {last ? (
          <TouchableOpacity onPress={eventFn}>
            <Text style={{ textAlign: "center", color: "blue", fontSize: 20 }}>
              {last}
            </Text>
          </TouchableOpacity>
        ) : (
          switcher
        )}
      </View>
    </View>
  );

  return (
    <View>
      {touchable ? (
        <Touchable onPress={onPressEvent}>
          <Child />
        </Touchable>
      ) : (
        <View>
          <Child />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  setting: {
    height: 60,
    width: WIDTH - 60,
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  settingName: {
    textAlign: "left",
    marginLeft: 15,
    fontSize: 22,
    color: "#444",
  },
  lastSetting: {
    height: 45,
    width: 60,
    position: "absolute",
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
