import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, TouchableHighlight } from "react-native";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default class Suggestions extends React.Component {
    render(){

        const SuggestionCard = ({img, name, calories, goToRecipe}) =>{
            return(
                <View style={styles.suggestionContainer}>
                    <Image source={img} style={{height: "100%",width: "100%"}} />
                    <View style={styles.suggestionDesc}>
                        <View style={{flexDirection: "row",alignItems: "center"}}>
                            <View>
                                <Text style={{...styles.suggestionName,fontFamily: "Lobster"}}>{name}</Text>
                                <Text style={styles.suggestionInfo}>Calories: {calories}</Text>
                            </View>
                            <TouchableHighlight style={styles.moreInfo} underlayColor="#e65100" onPress={goToRecipe}>
                                <Image source={require("../assets/plus.png")} style={{height: 20,width: 20}} />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            )
        }

        return(
            <View style={styles.container}>
                <ScrollView horizontal style={{height: "100%"}} showsHorizontalScrollIndicator={false}>
                    <SuggestionCard img={require("../assets/sug_1.jpg")} name="Stick Meal" calories="200" goToRecipe={this.props.goToRecipe} />
                    <SuggestionCard img={require("../assets/sug_2.jpg")} name="Pizza" calories="400" goToRecipe={this.props.goToRecipe} />
                    <SuggestionCard img={require("../assets/sug_3.jpg")} name="Chcken" calories="188" goToRecipe={this.props.goToRecipe} />
                    <SuggestionCard img={require("../assets/sug_4.jpg")} name="Chawarma" calories="635" goToRecipe={this.props.goToRecipe} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        width: WIDTH,
        height: 260
    },
    suggestionContainer: {
        height: 240,
        width: 180,
        backgroundColor: "#000",
        marginLeft: 20,
        borderRadius: 15,
        overflow: "hidden",
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
        alignItems: "center"
    },
    suggestionName: {
        textAlign: "left",
        color: "#000",
        fontSize: 20,
        marginTop: -5
    },
    suggestionInfo: {
        textAlign: "left",
        marginTop: -5,
        color: "#000"
    },
    moreInfo: {
        height: 50,
        width: 50,
        backgroundColor: "#ffa726",
        borderRadius: 15,
        marginLeft: 15,
        justifyContent: "center",
        alignItems: "center"
    }
})
