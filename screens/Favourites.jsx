import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { loadAsync } from "expo-font";
import { FavouriteCard } from "../component/FavouritesCard";
import AppHeader from "../component/AppHeader";

const WIDTH = Dimensions.get("window").width;

export default class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.loadFonts = async () =>
      await loadAsync({
        Lobster: require("../assets/Lobster.ttf"),
      });
    this.state = {
      favourites: [
        {
          foodName: "Frensh Food",
          foodLabel: "Delicious Food",
          calories: 200,
          foodImg: require("../assets/food5.jpg"),
        },
        {
          foodName: "Frensh Food",
          foodLabel: "Delicious Food",
          calories: 200,
          foodImg: require("../assets/food2.jpg"),
        },
        {
          foodName: "Frensh Food",
          foodLabel: "Delicious Food",
          calories: 200,
          foodImg: require("../assets/food3.jpg"),
        },
      ],
      font: "",
    };
  }

  componentWillMount() {
    this.loadFonts().then(() => this.setState({ font: "Lobster" }));
  }

  goToRecipe = () => this.props.navigation.navigate("Recipe");
  openDrawer = () => this.props.navigation.openDrawer();

  render() {
    return (
      <View style={styles.container}>
        <AppHeader name="Favourites" openDrawer={this.openDrawer} />
        <ScrollView style={styles.scroll}>
          <View style={{ paddingBottom: 50 }}>
            {this.state.favourites.map((food) => (
              <FavouriteCard
                name={food.foodName}
                label={food.foodLabel}
                calories={food.calories}
                img={food.foodImg}
                goToRecipe={this.goToRecipe}
              />
            ))}
          </View>
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
    paddingTop: 30,
  },
});
