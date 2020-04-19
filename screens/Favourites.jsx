import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { loadAsync } from "expo-font";
import { secondLayer } from "../global/officialColors";
import { Feather } from "@expo/vector-icons";
import { FavouriteCard } from "../component/FavouritesCard";

const WIDTH = Dimensions.get("window").width;

export default class Favourites extends React.Component {

    constructor(props){
        super(props);
        this.loadFonts = async() =>await loadAsync({
            "Lobster": require("../assets/Lobster.ttf")
        });
        this.state= {
            favourites: [
                {
                    foodName: "Frensh Food",
                    foodLabel: "Delicious Food",
                    calories: 200,
                    foodImg: require("../assets/food5.jpg")
                },
                {
                    foodName: "Frensh Food",
                    foodLabel: "Delicious Food",
                    calories: 200,
                    foodImg: require("../assets/food2.jpg")
                },
                {
                    foodName: "Frensh Food",
                    foodLabel: "Delicious Food",
                    calories: 200,
                    foodImg: require("../assets/food3.jpg")
                }
            ],
            font: ""
        }
    }

    componentWillMount() {
        this.loadFonts().then(() =>this.setState({font: "Lobster"}))
    }

    render(){

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{marginTop: 20,width: WIDTH,flexDirection: "row"}}>
                        <TouchableOpacity style={styles.drawer} onPress={() => this.props.navigation.openDrawer()}>
                            <Feather name="bar-chart-2" size={35} color="#fff" />
                        </TouchableOpacity>
                        <View style={{width: (WIDTH - 100),justifyContent: "center",}}>
                            <Text style={{...styles.title,fontFamily: this.state.font}}>Favourite Foods List</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.scroll}> 
                    <View style={{paddingBottom: 50}}>           
                        {
                            this.state.favourites.map(food =><FavouriteCard name={food.foodName} label={food.foodLabel} calories={food.calories} img={food.foodImg} />)
                        }
                    </View>
                </ScrollView>
            </View>
        )
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
    title: {
        textAlign: "center",
        fontSize: 30,
        color: "#fff",
        marginTop: 7
    },
    drawer: {
        height: 55,
        width: 55,
        backgroundColor: "transparent",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        transform: [{ rotate: "270deg" }]
    },
    header: {
        width: WIDTH,
        paddingHorizontal: 20,
        marginTop: 0,
        height: 80,
        flexDirection: "row",
        backgroundColor: secondLayer,
        alignItems: "center"
    }
})
