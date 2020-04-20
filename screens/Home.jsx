import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { loadAsync } from "expo-font";
import Header from "../component/Header";
import Suggestions from "../component/Suggestions";
import Food from "../component/Food";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Home extends React.Component {
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
    const openTheDrawer = () => this.props.navigation.openDrawer();
    const goToRecipe = () => this.props.navigation.navigate("Recipe");

    return (
      <View style={styles.container}>
        <Header openTheDrawer={openTheDrawer} />
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Suggestions goToRecipe={goToRecipe} />
          <Food goToRecipe={goToRecipe} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    width: WIDTH,
    marginTop: HEIGHT * 0.22,
  },
});
