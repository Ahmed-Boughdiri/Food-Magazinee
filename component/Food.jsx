import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { secondLayer } from "../global/officialColors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Touchable from "react-native-platform-touchable";
import { food } from "../global/getSuggestions";
import { manipulate } from "../global/manipulate";
import { handleRecipe } from "../global/handleRecipe";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default class Food extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const FoodCard = ({
      name,
      label,
      calories,
      img,
      goToRecipe,
      genInfo
    }) => {
      return (
        <View style={styles.card}>
          <Image source={img} style={styles.foodImage} />
          <View style={{ justifyContent: "center", paddingHorizontal: 15 }}>
            <Text style={styles.foodLabel}>{manipulate(name)}</Text>
            <Text style={styles.foodDes}>{manipulate(label)}</Text>
            <Text style={styles.foodCalories}>Calories: {calories}</Text>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Touchable
                style={styles.btn}
                underlayColor="#e65100"
                onPress={() =>{
                  handleRecipe(genInfo);
                  goToRecipe();
                }}
              >
                <Text
                  style={{ textAlign: "center", color: "#fff", fontSize: 16 }}
                >
                  Recipe
                </Text>
              </Touchable>
              <TouchableOpacity
                style={styles.like}
                onPress={() => this.setState({ liked: true })}
              >
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={35}
                  color={secondLayer}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    };

    return (
      <View style={styles.continer}>
        {food.map((fod) => (
          <FoodCard
            key={fod.yield}
            name={fod.label}
            label={fod.source}
            calories={Math.floor(fod.calories)}
            img={{uri: fod.image}}
            goToRecipe={this.props.goToRecipe}
            genInfo={fod}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
    width: WIDTH,
    paddingTop: 10,
    marginTop: -130,
  },
  card: {
    height: 150,
    width: WIDTH - 40,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    flexDirection: "row",
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  foodImage: {
    height: "100%",
    width: "45%",
  },
  foodLabel: {
    textAlign: "left",
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  foodDes: {
    textAlign: "left",
    fontSize: 17,
    color: "#000",
  },
  foodCalories: {
    textAlign: "left",
    fontSize: 16,
    color: "#000",
  },
  btn: {
    height: 45,
    width: 110,
    backgroundColor: secondLayer,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  like: {
    height: 45,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
