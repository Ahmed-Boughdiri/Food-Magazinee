import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import { secondLayer } from "../global/officialColors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default class Food extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            food: [
                {
                    foodName: "Japanese Food",
                    calories: 200,
                    label: "Very Delicious",
                    liked: false,
                    img: require("../assets/food1.jpg"),
                    key: 1,
                },
                {
                    foodName: "Japanese Food",
                    calories: 200,
                    label: "Very Delicious",
                    liked: false,
                    img: require("../assets/food2.jpg"),
                    key: 2,
                },
                {
                    foodName: "Japanese Food",
                    calories: 200,
                    label: "Very Delicious",
                    liked: false,
                    img: require("../assets/food3.jpg"),
                    key: 3,
                }
                ,{
                    foodName: "Japanese Food",
                    calories: 200,
                    label: "Very Delicious",
                    liked: false,
                    img: require("../assets/food4.jpg"),
                    key: 4,
                }
                ,{
                    foodName: "Japanese Food",
                    calories: 200,
                    label: "Very Delicious",
                    liked: false,
                    img: require("../assets/food5.jpg"),
                    key: 5,
                },
                {
                    foodName: "Japanese Food",
                    calories: 200,
                    label: "Very Delicious",
                    liked: false,
                    img: require("../assets/food6.jpg"),
                    key: 6,
                },
                {
                    foodName: "Japanese Food",
                    calories: 200,
                    label: "Very Delicious",
                    liked: false,
                    img: require("../assets/food7.png"),
                    key: 7,
                }
            ],
        }
    }

    render(){

        const FoodCard = ({ key, name, label, calories, img, goToRecipe, liked }) =>{
            return(
                <View style={styles.card}>
                    <Image source={img} style={styles.foodImage} />
                    <View style={{justifyContent: "center",paddingHorizontal: 15}}>
                        <Text style={styles.foodLabel}>{name}</Text>
                        <Text style={styles.foodDes}>{label}</Text>
                        <Text style={styles.foodCalories}>Calories: {calories}</Text>
                        <View style={{flexDirection: "row",marginTop: 15}}>
                            <TouchableHighlight style={styles.btn} underlayColor="#e65100" onPress={goToRecipe}>
                                <Text style={{textAlign: "center",color: "#fff",fontSize: 16}}>Recipe</Text>
                            </TouchableHighlight>
                            <TouchableOpacity style={styles.like} onPress={() => this.setState({ liked: true })}>
                                <MaterialCommunityIcons name="heart-outline" size={35} color={secondLayer} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }

        return(
            <View style={styles.continer}>
                {
                    this.state.food.map(fod => <FoodCard key={fod.key} name={fod.foodName} label={fod.label} calories={fod.calories} img={fod.img} goToRecipe={this.props.goToRecipe} liked={fod.liked} />)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    continer: {
        width: WIDTH,
        paddingTop: 10,
        marginTop: -130
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
        shadowRadius: 16.00,
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
        fontWeight: "bold"
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
        alignItems: "center"
    },
    like: {
        height: 45,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    }
})
