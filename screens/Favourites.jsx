import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { loadAsync } from "expo-font";

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

        const FavouriteCard = ({ name, label, calories, img }) =>{
            return(
                <View style={styles.favouriteCard}>
                    <Image source={img} style={styles.cardImg} />
                    <View style={styles.cardDescContainer}>
                        <View style={{flexDirection: "row",width: "80%",justifyContent: "space-around"}}>
                            <Text style={{textAlign: "left",color: "#000",fontSize: 20,fontWeight: "bold"}}>{name} - </Text>
                            <Text style={{textAlign: "left",color: "#000",fontSize: 17,marginTop: 3}}>{label}</Text>
                        </View>
                        <Text style={{textAlign: "left",color: "#000",fontSize: 17,width: "80%"}}>Calories: {calories}</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{textAlign: "center",color: "#fff",fontSize: 17}}>Show Recipe</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.delete}>
                        <Image source={require("../assets/cross.png")} style={{height: "100%",width: "100%"}} />
                    </TouchableOpacity>
                </View>
            )
        }

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{marginTop: 20,width: WIDTH,flexDirection: "row"}}>
                        <TouchableOpacity style={styles.drawer} onPress={() => this.props.navigation.openDrawer()}>
                            <Image source={require("../assets/burger.png")} style={{height: 50,width: 50}} />
                        </TouchableOpacity>
                        <View style={{width: (WIDTH - 100),justifyContent: "center",}}>
                            <Text style={{...styles.title,fontFamily: this.state.font}}>Favourite Foods List</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.scroll}>            
                    {
                        this.state.favourites.map(food =><FavouriteCard name={food.foodName} label={food.foodLabel} calories={food.calories} img={food.foodImg} />)
                    }
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
    favouriteCard: {
        height: 300,
        width: 320,
        backgroundColor: "#000",
        borderRadius: 20,
        marginBottom: 15,
        overflow: "hidden",
        alignSelf: "center"
    },
    cardImg: {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    cardDescContainer: {
        height: 150,
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        height: 50,
        width: "80%",
        backgroundColor: "#ffa726",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    delete: {
        height: 35,
        width: 35,
        position: "absolute",
        top: 10,
        left: 10
    },
    drawer: {
        height: 55,
        width: 55,
        backgroundColor: "#ffa726",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        width: WIDTH,
        paddingHorizontal: 20,
        marginTop: 0,
        height: 100,
        flexDirection: "row",
        backgroundColor: "#ffa726",
        alignItems: "center"
    }
})
