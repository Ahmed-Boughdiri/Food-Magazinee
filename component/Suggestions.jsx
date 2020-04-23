import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { secondLayer } from "../global/officialColors";
import Touchable from "react-native-platform-touchable";
import { MaterialIcons } from "@expo/vector-icons";
import { sugg } from "../global/getSuggestions";
import { manipulate } from "../global/manipulate";
import { handleRecipe } from "../global/handleRecipe";

const WIDTH = Dimensions.get("window").width;

export default class Suggestions extends React.Component {
  render() {
    const SuggestionCard = ({ img, name, calories, goToRecipe, food }) => {
      return (
        <View style={styles.suggestionContainer}>
          <Image source={img} style={{ height: "100%", width: "100%" }} />
          <View style={styles.suggestionDesc}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "85%",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{ ...styles.suggestionName, fontFamily: "Lobster" }}
                >
                  {manipulate(name)}
                </Text>
                <Text style={styles.suggestionInfo}>Calories: {calories}</Text>
              </View>
              <Touchable
                style={styles.moreInfo}
                underlayColor="#e65100"
                onPress={() =>{
                  handleRecipe(food);
                  goToRecipe();
                }}
              >
                <MaterialIcons name="add-box" color={secondLayer} size={55} />
              </Touchable>
            </View>
          </View>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          style={{ height: "100%" }}
          showsHorizontalScrollIndicator={false}
        >
          {
          sugg.map(sug =>(
            <SuggestionCard
              key={sug.yield}
              img={{uri: sug.image}}
              name={sug.label}
              calories={Math.floor(sug.calories)}
              goToRecipe={this.props.goToRecipe}
              food={sug}
            />
          ))
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: WIDTH,
    height: 400,
  },
  suggestionContainer: {
    height: 240,
    width: 250,
    backgroundColor: "#000",
    marginLeft: 20,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginVertical: 10,
  },
  suggestionDesc: {
    height: 80,
    width: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  suggestionName: {
    textAlign: "left",
    color: "#000",
    fontSize: 25,
    marginTop: -5,
  },
  suggestionInfo: {
    textAlign: "left",
    marginTop: -5,
    color: "#000",
  },
  moreInfo: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
