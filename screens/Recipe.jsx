import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Caption } from "react-native-paper";
import Touchable from "react-native-platform-touchable";
import { secondLayer } from "../global/officialColors";
import { recipe } from "../global/handleRecipe";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Recipe extends React.Component {
  render() {
    var i = 0;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: recipe.image }}
          style={styles.header}
        ></ImageBackground>
        <ScrollView style={styles.recipeContainer}>
          <View style={{ width: "80%", alignSelf: "center" }}>
            <Text style={styles.title}>{recipe.name}</Text>
            <Caption style={{ fontSize: 17 }}>{recipe.label}</Caption>
            <View style={styles.recipe}>
              <Text style={styles.DescTitle}>Ingredients: </Text>
              {
                recipe.ingredients.map(ing =>(
                    <Text style={styles.line}>{ i++ + ") "  + ing.text }</Text>
                ))
              }
              <Text style={{...styles.DescTitle,marginTop: 20}}>totalNutrients</Text>
              {
                recipe.totalNutrients.map(nut =>(
                  <Text>- {nut.label + ": " + Math.floor(nut.quantity) + nut.unit}</Text>
                ))
              }
            </View>
          </View>
          <Touchable style={styles.btn} onPress={() => console.log(recipe)}>
            <View style={{ flexDirection: "row" }}>
              <Entypo name="heart" color="#fff" size={30} />
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontSize: 17,
                  marginLeft: 10,
                  marginTop: 3,
                }}
              >
                Put in The Favourite
              </Text>
            </View>
          </Touchable>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEIGHT * 0.45,
    width: WIDTH,
    marginTop: -60,
  },
  recipeContainer: {
    width: WIDTH,
    paddingTop: 20,
  },
  title: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },
  recipe: {
    marginTop: 35,
  },
  btn: {
    height: 60,
    width: "80%",
    backgroundColor: secondLayer,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    alignSelf: "center",
    marginBottom: 60,
  },
  line: {
    width: "100%",
    textAlign: "left",
    fontSize: 16,
    color: "#000",
    marginBottom: 5
  },
  DescTitle: {
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 25
  }
});
