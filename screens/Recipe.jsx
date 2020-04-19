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

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Recipe extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/food3.jpg")}
          style={styles.header}
        >
        </ImageBackground>
        <ScrollView style={styles.recipeContainer}>
          <View style={{ width: "80%", alignSelf: "center" }}>
            <Text style={styles.title}>Recipe Name</Text>
            <Caption style={{ fontSize: 17 }}>Food Label</Caption>
            <Text style={styles.recipe}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eveniet rem nobis molestiae. Expedita laboriosam id labore eius,
              voluptate est nemo, nostrum nulla minima tempora, dolorem eos
              dolore incidunt. Assumenda?

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eveniet rem nobis molestiae. Expedita laboriosam id labore eius,
              voluptate est nemo, nostrum nulla minima tempora, dolorem eos
              dolore incidunt. Assumenda?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eveniet rem nobis molestiae. Expedita laboriosam id labore eius,
              voluptate est nemo, nostrum nulla minima tempora, dolorem eos
              dolore incidunt. Assumenda?

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eveniet rem nobis molestiae. Expedita laboriosam id labore eius,
              voluptate est nemo, nostrum nulla minima tempora, dolorem eos
              dolore incidunt. Assumenda?
            </Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <View style={{flexDirection: "row"}}>
                <Entypo name="heart" color="#fff" size={30} />
                <Text style={{textAlign: "center",color: "#fff",fontSize: 17,marginLeft: 10,marginTop: 3}}>Put in The Favourite</Text>
            </View>
        </TouchableOpacity>
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
    textAlign: "left",
    fontSize: 16,
    color: "#000",
    marginTop: 35,
  },
  btn: {
    height: 60,
    width: "80%",
    backgroundColor: "#ffa726",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    alignSelf: "center",
    marginBottom: 60
  }
});
