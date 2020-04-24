import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { loadAsync } from "expo-font";
import { FavouriteCard } from "../component/FavouritesCard";
import AppHeader from "../component/AppHeader";
import { favouritesList, handleFavourites } from "../global/handleFavourites";
import * as firebase from "firebase";
import { userID } from "../global/authentification";

try{
  firebase.initializeApp({
    apiKey: "AIzaSyCeux7stATTFyPU7pugF7Ko9bCRKWfbmMo",
    authDomain: "food-magazine-6e38c.firebaseapp.com",
    databaseURL: "https://food-magazine-6e38c.firebaseio.com",
    projectId: "food-magazine-6e38c",
    storageBucket: "food-magazine-6e38c.appspot.com",
    messagingSenderId: "367169216825",
    appId: "1:367169216825:web:b7e68a9e5802516b8b88e8",
    measurementId: "G-0Z14QWEXY7"
  })
}catch(error){
  console.log(error)
}

const WIDTH = Dimensions.get("window").width;

export default class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.loadFonts = async () =>
      await loadAsync({
        Lobster: require("../assets/Lobster.ttf"),
      });
    this.state = {
      font: "",
      favourites: favouritesList
    };
  }

  componentWillMount() {
    this.loadFonts().then(() => this.setState({ font: "Lobster" }));
    handleFavourites();
  }

  handleUpdate = () =>{
    firebase.database().ref(userID).on("child_changed", snap =>{
      handleFavourites();
      this.setState({ favourites: favouritesList })
    })
  }

  goToRecipe = () => this.props.navigation.navigate("Recipe");
  openDrawer = () => this.props.navigation.openDrawer();

  render() {

    const FavouritesEmpty = () =>(
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>The Favourites List is Empty</Text>
      </View>
    )

    return (
      <View style={styles.container}>
        <AppHeader name="Favourites" openDrawer={this.openDrawer} />
        {
          (this.state.favourites.length < 1) ? <FavouritesEmpty /> : (
            <ScrollView style={styles.scroll}>
              <View style={{ paddingBottom: 50 }}>
                {favouritesList.map((food) => {
                  if(food.name != "null"){
                    return(
                      <FavouriteCard
                        name={food.name}
                        label={food.label}
                        calories={food.calories}
                        img={food.image}
                        goToRecipe={this.goToRecipe}
                      />
                    )
                  }
                })}
              </View>
          </ScrollView>
          )
        }
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
